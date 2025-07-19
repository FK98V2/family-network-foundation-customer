import { Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';

export default function ComingSoon() {
  return (
    <Grid
      container
      height={100}
      alignItems='center'
      justifyContent='center'
      size={12}
    >
      <Typography textAlign='center' variant='subtitle1'>
        เร็วๆ นี้
      </Typography>
    </Grid>
  );
}
