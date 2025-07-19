import { NextRequest, NextResponse } from 'next/server';
import { Blog, Response } from '@/app/type';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<Response<Blog>>> {
  const { id } = await params;
  console.log(id);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles/${id}`,
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
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        data: {
          id: 0,
          title: '',
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
