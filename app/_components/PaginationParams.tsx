'use client';

import { Pagination } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

interface Props {
  totalPages: number;
  scrollToId?: string;
}

function PaginationParamsInner({ totalPages, scrollToId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageNumber = Number(searchParams.get('page')) || 1;

  // Add useEffect to handle scrolling after page changes
  useEffect(() => {
    if (scrollToId && searchParams.get('page')) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ block: 'start' });
      }
    }
  }, [pageNumber, scrollToId, searchParams]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (value > totalPages) return;

    // Create a new URLSearchParams instance
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('page', value.toString());

    // Preserve other query parameters
    const queryString = newSearchParams.toString();
    const newPath = queryString ? `?${queryString}` : '';

    router.push(newPath);
  };

  return (
    <Pagination
      count={totalPages}
      color='secondary'
      page={pageNumber}
      onChange={handleChange}
      showFirstButton
      showLastButton
    />
  );
}

// Wrapper component with Suspense boundary
export default function PaginationParams({ totalPages, scrollToId }: Props) {
  return (
    <Suspense
      fallback={<Pagination count={totalPages} color='secondary' disabled />}
    >
      <PaginationParamsInner totalPages={totalPages} scrollToId={scrollToId} />
    </Suspense>
  );
}
