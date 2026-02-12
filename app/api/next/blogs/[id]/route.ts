import { NextRequest, NextResponse } from 'next/server';
import { Blog, Response } from '@/app/type';
import {
  checkRateLimit,
  tooManyRequestsResponse,
} from '@/app/_utils/apiSecurity';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<Response<Blog>>> {
  const { allowed, retryAfterSeconds } = checkRateLimit(request, {
    keyPrefix: 'next-api:blog-by-id',
    maxRequests: 60,
  });
  if (!allowed) {
    return tooManyRequestsResponse(
      {
        data: {
          id: 0,
          title: '',
          type: 'INFO_GRAPHIC',
          markdownContent: '',
          thumbnailUrl: '',
          attachments: [],
          createdAt: 0,
        },
        message: 'Too many requests',
        status: 429,
      },
      retryAfterSeconds
    );
  }

  const { id } = await params;
  if (!/^\d{1,10}$/.test(id)) {
    return NextResponse.json(
      {
        data: {
          id: 0,
          title: '',
          type: 'INFO_GRAPHIC',
          markdownContent: '',
          thumbnailUrl: '',
          attachments: [],
          createdAt: 0,
        },
        message: 'Invalid blog id',
        status: 400,
      },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles/${id}`,
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
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        data: {
          id: 0,
          title: '',
          type: 'INFO_GRAPHIC',
          markdownContent: '',
          thumbnailUrl: '',
          attachments: [],
          createdAt: 0,
        },
        message: 'Failed to fetch blog',
        status: 500,
      },
      { status: 500 }
    );
  }
}
