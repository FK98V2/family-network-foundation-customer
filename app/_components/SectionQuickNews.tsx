import React from 'react';
import { Button, Grid2 as Grid, Link, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SectionAnnouncement from './SectionAnnouncement';
import SectionSlideCard from './SectionSlideCard';

export default function SectionQuickNews() {
  return (
    <Grid my={1} container>
      <SectionAnnouncement />
      <Grid container size={{ xs: 12, md: 8 }}>
        <Grid alignItems='center' p={1} container size={12}>
          <Grid size={6}>
            <Typography variant='h3'>กิจกรรมเด่น</Typography>
          </Grid>
          <Grid container justifyContent='flex-end' size={6}>
            <Button
              endIcon={<ArrowForward />}
              component={Link}
              variant='text'
              href='/news/activity'
              size='small'
              sx={{
                color: 'secondary.main',
              }}
            >
              ดูกิจกรรมทั้งหมด
            </Button>
          </Grid>
        </Grid>
        <Grid size={12}>
          <SectionSlideCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
