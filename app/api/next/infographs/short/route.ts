import { NextResponse } from 'next/server';
import { Activity, ResponsePagination } from '@/app/api/type';

export async function GET(): Promise<
  NextResponse<ResponsePagination<Activity[]>>
> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles?type=INFO_GRAPHIC&pageNumber=0&pageSize=6`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // ไม่ cache ที่ route handler เพราะเราจะ cache ที่ component
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch activities');
    }

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
