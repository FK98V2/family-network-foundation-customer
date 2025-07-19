import BtnBackHistory from '@/app/_components/BtnBackHistory';
import ContainerSection from '@/app/_components/ContainerSection';
import TimeShow from '@/app/_components/TimeShow';
import { getBlog } from '@/app/fetch';
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Blog({ params }: Props) {
  const { id } = await params;
  const {
    data: { createdAt, title, thumbnailUrl, markdownContent },
  } = await getBlog(id);

  return (
    <ContainerSection>
      <Grid size={12}>
        <BtnBackHistory />
      </Grid>
      <Grid size={12}>
        <Typography variant='h2'>
          {title}
          <TimeShow times={createdAt} />
        </Typography>
      </Grid>
      <Grid container justifyContent='center' size={12}>
        <Box position='relative' width='100%' height='425px'>
          <Image
            src={thumbnailUrl}
            alt='activity'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'start',
            }}
          />
        </Box>
      </Grid>
      <Grid size={12}>
        <Typography variant='h6'>{markdownContent}</Typography>
      </Grid>
    </ContainerSection>
  );
}
