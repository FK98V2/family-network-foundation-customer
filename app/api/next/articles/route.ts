import { NextRequest, NextResponse } from 'next/server';
import { Article, ResponsePagination } from '@/app/type';

export async function GET(
  request: NextRequest
): Promise<NextResponse<ResponsePagination<Article[]>>> {
  const searchParams = request.nextUrl.searchParams;
  const pageNumber = searchParams.get('page') || '0';
  const pageSize = searchParams.get('size') || '10';

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.warn('NEXT_PUBLIC_API_URL not configured, returning empty data');
      return NextResponse.json({
        data: {
          content: [],
          pagination: {
            pageNumber: parseInt(pageNumber) || 0,
            pageSize: parseInt(pageSize) || 10,
            totalElements: 0,
            totalPages: 0,
          },
        },
        message: 'API URL not configured',
        status: 200,
      });
    }

    const response = await fetch(
      `${apiUrl}/api/v1/articles?type=FOUNDATION&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      {
        data: {
          content: [],
          pagination: {
            pageNumber: parseInt(pageNumber) || 0,
            pageSize: parseInt(pageSize) || 10,
            totalElements: 0,
            totalPages: 0,
          },
        },
        message: 'Failed to fetch articles',
        status: 500,
      },
      { status: 500 }
    );
  }
}
