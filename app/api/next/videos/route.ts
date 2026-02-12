import { NextResponse } from 'next/server';
import { ResponsePagination, Video } from '@/app/type';
import {
  checkRateLimit,
  parseBoundedInt,
  tooManyRequestsResponse,
} from '@/app/_utils/apiSecurity';

export async function GET(
  request: Request
): Promise<NextResponse<ResponsePagination<Video[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseBoundedInt(searchParams.get('page'), 0, 0, 500);
    const size = parseBoundedInt(searchParams.get('size'), 10, 1, 50);

    const { allowed, retryAfterSeconds } = checkRateLimit(request, {
      keyPrefix: 'next-api:videos',
      maxRequests: 90,
    });
    if (!allowed) {
      return tooManyRequestsResponse(
        {
          data: {
            content: [],
            pagination: {
              pageNumber: page,
              pageSize: size,
              totalElements: 0,
              totalPages: 0,
            },
          },
          message: 'Too many requests',
          status: 429,
        },
        retryAfterSeconds
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/youtube?page=${page}&size=${size}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
        signal: AbortSignal.timeout(8000),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      {
        data: {
          content: [],
          pagination: {
            pageNumber: 0,
            pageSize: 10,
            totalElements: 0,
            totalPages: 0,
          },
        },
        message: 'Failed to fetch videos',
        status: 500,
      },
      { status: 500 }
    );
  }
}
