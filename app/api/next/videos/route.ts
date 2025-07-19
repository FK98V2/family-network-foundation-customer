import { NextResponse } from 'next/server';
import { ResponsePagination, Video } from '@/app/type';

export async function GET(
  request: Request
): Promise<NextResponse<ResponsePagination<Video[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get('page')) || 0;
    const size = Number(searchParams.get('size')) || 10;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/youtube?page=${page}&size=${size}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
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
