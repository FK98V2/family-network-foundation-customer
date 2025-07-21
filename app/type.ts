import { StaticImageData } from 'next/image';

export type CardActivity = {
  title: string;
  description: string;
  image: StaticImageData;
};

export interface Activity {
  id: number;
  title: string;
  markdownContent: string;
  thumbnailUrl: string;
  createdAt: number;
}

export interface Annoucement {
  id: number;
  title: string;
  description: string;
  link: string;
  createdAt: number;
  position: number;
}

export interface Procurement {
  id: number;
  title: string;
  documentUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface InfoGraphic {
  id: number;
  title: string;
  markdownContent: string;
  thumbnailUrl: string;
  createdAt: number;
}

export interface Article {
  id: number;
  title: string;
  markdownContent: string;
  thumbnailUrl: string;
  createdAt: number;
}

export interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
}

export interface Response<T> {
  data: T;
  message: string;
  status: number;
}

export interface ResponsePagination<T> {
  data: {
    content: T;
    pagination: {
      pageNumber: number;
      pageSize: number;
      totalElements: number;
      totalPages: number;
    };
  };
  message: string;
  status: number;
}

export interface PaginationParams {
  page?: number;
  size?: number;
}

export interface Blog {
  id: number;
  title: string;
  markdownContent: string;
  thumbnailUrl: string;
  attachments: Attachment[];
  createdAt: number;
  type: 'INFO_GRAPHIC' | 'ACTIVITY' | 'FOUNDATION';
}

export interface Attachment {
  name: string;
  url: string;
  size: number;
}
