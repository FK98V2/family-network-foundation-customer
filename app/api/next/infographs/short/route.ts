import { NextResponse } from 'next/server';
import { Activity, ResponsePagination } from '@/app/type';
import {
  checkRateLimit,
  tooManyRequestsResponse,
} from '@/app/_utils/apiSecurity';

export async function GET(
  request: Request
): Promise<
  NextResponse<ResponsePagination<Activity[]>>
> {
  const { allowed, retryAfterSeconds } = checkRateLimit(request, {
    keyPrefix: 'next-api:infographs-short',
    maxRequests: 60,
  });
  if (!allowed) {
    return tooManyRequestsResponse(
      {
        data: {
          content: [],
          pagination: {
            pageNumber: 0,
            pageSize: 6,
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
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles?type=INFO_GRAPHIC&pageNumber=0&pageSize=6`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // ไม่ cache ที่ route handler เพราะเราจะ cache ที่ component
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
            pageNumber: 0,
            pageSize: 0,
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
