import { NextResponse } from 'next/server';
import { Response, Video } from '@/app/type';

export async function GET(): Promise<NextResponse<Response<Video[]>>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/youtube`,
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
        data: [],
        message: 'Failed to fetch videos',
        status: 500,
      },
      { status: 500 }
    );
  }
}
