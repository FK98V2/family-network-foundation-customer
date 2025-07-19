import React from 'react';
import CardActivity from './CardActivity';
import { Grid2 as Grid } from '@mui/material';
import { getActivitiesHighlight } from '@/app/fetch';
import ComingSoon from './ComingSoon';

export default async function ActivitiesHighLight() {
  const { data: activities } = await getActivitiesHighlight();

  if (!activities?.length) return <ComingSoon />;
  return (
    <Grid container spacing={4} my='40px'>
      {activities.slice(0, 3).map((activity, index) => (
        <Grid
          key={activity.id || index}
          height={{ xs: '496px', md: '637px' }}
          size={{ xs: 12, md: 4 }}
        >
          <CardActivity {...activity} />
        </Grid>
      ))}
    </Grid>
  );
}
