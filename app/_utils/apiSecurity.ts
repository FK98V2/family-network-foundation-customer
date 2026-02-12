import { NextResponse } from 'next/server';

type RateLimitOptions = {
  keyPrefix: string;
  windowMs?: number;
  maxRequests?: number;
};

type RateLimitState = {
  count: number;
  resetAt: number;
};

const DEFAULT_WINDOW_MS = 60_000;
const DEFAULT_MAX_REQUESTS = 120;
const MAX_TRACKED_KEYS = 5_000;
const rateLimitStore = new Map<string, RateLimitState>();

function cleanupExpiredEntries(now: number) {
  if (rateLimitStore.size <= MAX_TRACKED_KEYS) {
    return;
  }

  for (const [key, state] of rateLimitStore.entries()) {
    if (state.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

export function checkRateLimit(
  request: Request,
  options: RateLimitOptions
): { allowed: boolean; retryAfterSeconds: number } {
  const windowMs = options.windowMs || DEFAULT_WINDOW_MS;
  const maxRequests = options.maxRequests || DEFAULT_MAX_REQUESTS;
  const now = Date.now();

  cleanupExpiredEntries(now);

  const key = `${options.keyPrefix}:${getClientIp(request)}`;
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((current.resetAt - now) / 1000)
      ),
    };
  }

  current.count += 1;
  rateLimitStore.set(key, current);
  return { allowed: true, retryAfterSeconds: 0 };
}

export function parseBoundedInt(
  value: string | null,
  defaultValue: number,
  min: number,
  max: number
): number {
  if (value === null || value === '') {
    return defaultValue;
  }

  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    return defaultValue;
  }

  return Math.min(max, Math.max(min, parsed));
}

export function tooManyRequestsResponse<T extends object>(
  body: T,
  retryAfterSeconds: number
): NextResponse<T> {
  return NextResponse.json(body, {
    status: 429,
    headers: {
      'Retry-After': String(retryAfterSeconds),
    },
  });
}
