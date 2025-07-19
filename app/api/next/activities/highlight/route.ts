import { NextResponse } from 'next/server';
import { Activity, Response } from '@/app/type';

export async function GET(): Promise<NextResponse<Response<Activity[]>>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles/activity/highlight`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // ไม่ cache ที่ route handler เพราะเราจะ cache ที่ component
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json(
      { data: [], message: 'Failed to fetch activities', status: 500 },
      { status: 500 }
    );
  }
}
