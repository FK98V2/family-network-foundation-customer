import {
  Activity,
  Annoucement,
  Article,
  Blog,
  InfoGraphic,
  PaginationParams,
  Procurement,
  Response,
  ResponsePagination,
  Video,
} from './type';

export async function getActivitiesHighlight(): Promise<Response<Activity[]>> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/activities/highlight`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching activities highlight:', error);
    return {
      data: [],
      message: 'Failed to fetch activities highlight',
      status: 500,
    };
  }
}

export async function getActivitiesShort(): Promise<
  ResponsePagination<Activity[]>
> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/activities/short`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching activities short:', error);
    return {
      data: {
        content: [],
        pagination: {
          pageNumber: 0,
          pageSize: 10,
          totalElements: 0,
          totalPages: 0,
        },
      },
      message: 'Failed to fetch activities short',
      status: 500,
    };
  }
}

export async function getActivities(
  params?: PaginationParams
): Promise<ResponsePagination<Activity[]>> {
  try {
    const queryParams = new URLSearchParams({
      page: (params?.page || 0).toString(),
      size: (params?.size || 10).toString(),
    }).toString();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/activities?${queryParams}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching activities:', error);
    return {
      data: {
        content: [],
        pagination: {
          pageNumber: params?.page || 0,
          pageSize: params?.size || 10,
          totalElements: 0,
          totalPages: 0,
        },
      },
      message: 'Failed to fetch activities',
      status: 500,
    };
  }
}

export async function getAnnoucement(): Promise<Response<Annoucement[]>> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/annoucements`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return {
      data: [],
      message: 'Failed to fetch announcements',
      status: 500,
    };
  }
}

export async function getProcurements(
  params?: PaginationParams
): Promise<ResponsePagination<Procurement[]>> {
  try {
    const queryParams = new URLSearchParams({
      page: (params?.page || 0).toString(),
      size: (params?.size || 10).toString(),
    }).toString();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/procurements?${queryParams}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching procurements:', error);
    return {
      data: {
        content: [],
        pagination: {
          pageNumber: params?.page || 0,
          pageSize: params?.size || 10,
          totalElements: 0,
          totalPages: 0,
        },
      },
      message: 'Failed to fetch procurements',
      status: 500,
    };
  }
}

export async function getInfoGraphs(
  params?: PaginationParams
): Promise<ResponsePagination<InfoGraphic[]>> {
  try {
    const queryParams = new URLSearchParams({
      page: (params?.page || 0).toString(),
      size: (params?.size || 10).toString(),
    }).toString();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/infographs?${queryParams}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching infographs:', error);
    return {
      data: {
        content: [],
        pagination: {
          pageNumber: params?.page || 0,
          pageSize: params?.size || 10,
          totalElements: 0,
          totalPages: 0,
        },
      },
      message: 'Failed to fetch infographs',
      status: 500,
    };
  }
}

export async function getInfoGraphsShort(): Promise<
  ResponsePagination<InfoGraphic[]>
> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/infographs/short`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching infographs short:', error);
    return {
      data: {
        content: [],
        pagination: {
          pageNumber: 0,
          pageSize: 10,
          totalElements: 0,
          totalPages: 0,
        },
      },
      message: 'Failed to fetch infographs short',
      status: 500,
    };
  }
}

export async function getVideos(
  params?: PaginationParams
): Promise<ResponsePagination<Video[]>> {
  try {
    const queryParams = new URLSearchParams({
      page: (params?.page || 0).toString(),
      size: (params?.size || 10).toString(),
    }).toString();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/videos?${queryParams}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching videos:', error);
    return {
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
    };
  }
}

export async function getArticles(
  params?: PaginationParams
): Promise<ResponsePagination<Article[]>> {
  try {
    const queryParams = new URLSearchParams({
      page: (params?.page || 0).toString(),
      size: (params?.size || 10).toString(),
    }).toString();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/articles?${queryParams}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      data: {
        content: [],
        pagination: {
          pageNumber: params?.page || 0,
          pageSize: params?.size || 10,
          totalElements: 0,
          totalPages: 0,
        },
      },
      message: 'Failed to fetch articles',
      status: 500,
    };
  }
}

export async function getBlog(id: string): Promise<Response<Blog>> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/blogs/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    return {
      data: {
        id: 0,
        title: 'ไม่พบบทความ',
        markdownContent: 'ขออภัย ไม่สามารถโหลดบทความได้ในขณะนี้',
        thumbnailUrl: '',
        attachments: [],
        createdAt: Date.now(),
      },
      message: 'Failed to fetch blog',
      status: 500,
    };
  }
}
