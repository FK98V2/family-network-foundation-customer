import React from 'react';
import { getInfoGraphsShort } from '../fetch';
import { Grid2 as Grid } from '@mui/material';
import CardActivity from './CardActivity';
import ComingSoon from './ComingSoon';

export default async function InfoGraphsRecent() {
  const { data: infoGraphs } = await getInfoGraphsShort();

  if (!infoGraphs.content.length) return <ComingSoon />;
  return (
    <>
      {infoGraphs.content.map((infoGraph, index) => (
        <Grid key={index} size={{ xs: 12, md: 4 }}>
          <CardActivity {...infoGraph} />
        </Grid>
      ))}
    </>
  );
}
