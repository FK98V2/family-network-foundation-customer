import { Button, Grid2 as Grid, Link, Typography } from '@mui/material';
import ContainerSection from '@/app/_components/ContainerSection';
import React from 'react';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ShowAllContent from '@/app/_components/AcivitiesContent';

interface Props {
  searchParams: Promise<{
    page?: string;
    size?: string;
  }>;
}

export default async function InfoGraph({ searchParams }: Props) {
  return (
    <>
      <ContainerSection isMaxContent={true}>
        <Grid size={12}>
          <Button
            component={Link}
            href='/media'
            variant='text'
            color='secondary'
            startIcon={<ArrowBackIosNew />}
          >
            ย้อนกลับ
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h2'>อินโฟกราฟิกทั้งหมด</Typography>
        </Grid>
        <ShowAllContent searchParams={await searchParams} type='info-graph' />
      </ContainerSection>
    </>
  );
}
