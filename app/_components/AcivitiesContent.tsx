import { Grid2 as Grid } from '@mui/material';
import React, { Suspense } from 'react';
import CardActivity from './CardActivity';
import { getActivities, getInfoGraphs } from '@/app/fetch';
import PaginationParams from './PaginationParams';

interface Props {
  searchParams: {
    page?: string;
    size?: string;
  };
  type: 'activity' | 'info-graph';
}

export default async function ShowAllContent({ searchParams, type }: Props) {
  const page = Number(searchParams?.page) || 1;

  const { data } = await (type === 'activity'
    ? getActivities({ page: page - 1, size: 12 })
    : getInfoGraphs({ page: page - 1, size: 12 }));

  const { content, pagination } = data;

  return (
    <>
      <Grid container justifyContent='end' size={{ xs: 12, md: 6 }} mt={4}>
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationParams
            totalPages={pagination.totalPages}
            scrollToId='content-section'
          />
        </Suspense>
      </Grid>
      <Grid container spacing={2} size={12}>
        {content.map((item) => (
          <Grid
            minHeight={{ xs: '496px', md: '637px' }}
            key={item.id}
            size={{ xs: 12, md: 4 }}
          >
            <CardActivity {...item} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination - wrap in Suspense since it's a client component */}
      <Grid container justifyContent='center' size={12} mt={4}>
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationParams
            totalPages={pagination.totalPages}
            scrollToId='content-section'
          />
        </Suspense>
      </Grid>
    </>
  );
}
