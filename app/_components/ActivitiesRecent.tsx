import React from 'react';
import { getActivitiesShort } from '../fetch';
import { Grid2 as Grid, Typography } from '@mui/material';
import CardActivity from './CardActivity';

export default async function ActivitiesRecent() {
  const { data: activities } = await getActivitiesShort();

  if (!activities?.content || activities.content.length === 0)
    return (
      <Grid
        container
        height={100}
        alignItems='center'
        justifyContent='center'
        size={12}
      >
        <Typography textAlign='center' variant='body1'>
          ยังไม่มีข้อมูล
        </Typography>
      </Grid>
    );

  return (
    <>
      {activities.content.map((activity, index) => (
        <Grid
          key={index}
          size={{ xs: 12, md: 4 }}
          minHeight={{ xs: '496px', md: '637px' }}
        >
          <CardActivity {...activity} />
        </Grid>
      ))}
    </>
  );
}
