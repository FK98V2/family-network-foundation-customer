import { NextRequest, NextResponse } from 'next/server';
import { InfoGraphic, ResponsePagination } from '@/app/type';
import {
  checkRateLimit,
  parseBoundedInt,
  tooManyRequestsResponse,
} from '@/app/_utils/apiSecurity';

export async function GET(
  request: NextRequest
): Promise<NextResponse<ResponsePagination<InfoGraphic[]>>> {
  const searchParams = request.nextUrl.searchParams;
  const pageNumber = parseBoundedInt(searchParams.get('page'), 0, 0, 500);
  const pageSize = parseBoundedInt(searchParams.get('size'), 10, 1, 50);

  const { allowed, retryAfterSeconds } = checkRateLimit(request, {
    keyPrefix: 'next-api:infographs',
    maxRequests: 90,
  });
  if (!allowed) {
    return tooManyRequestsResponse(
      {
        data: {
          content: [],
          pagination: {
            pageNumber,
            pageSize,
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

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles?type=INFO_GRAPHIC&pageNumber=${pageNumber}&pageSize=${pageSize}`,
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
    console.error('Error fetching activities:', error);
    return NextResponse.json(
      {
        data: {
          content: [],
          pagination: {
            pageNumber,
            pageSize,
            totalElements: 0,
            totalPages: 0,
          },
        },
        message: 'Failed to fetch activities',
        status: 500,
      },
      { status: 500 }
    );
  }
}
