import { Box, Button, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Video } from '../type';

interface Props {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  onClick: (video: Video) => void;
  idSelected: number | undefined;
}

export default function VideoTap({
  id,
  title,
  thumbnailUrl,
  duration,
  videoUrl,
  onClick,
  idSelected,
}: Props) {
  const diaplayTitle = title.length > 50 ? title.slice(0, 50) + '...' : title;

  return (
    <Grid
      component={Button}
      onClick={() => onClick({ id, title, thumbnailUrl, duration, videoUrl })}
      bgcolor='white'
      spacing={2}
      height='75px'
      container
      variant='text'
      color='inherit'
      size={12}
      disabled={idSelected === id}
      sx={{
        display: 'flex',
        color: 'black',
        textAlign: 'left',
        textTransform: 'none',
        justifyContent: 'space-between',
        alignItems: 'start',
        fontSize: '1rem',
        backgroundColor: idSelected === id ? '#FAFAFA' : 'white',
        border: idSelected === id ? '1px solid #FAFAFA' : 'none',
        '&:hover': {
          bgcolor: '#FAFAFA',
        },
        '&:disabled': {
          color: 'black',
          backgroundColor: '#FAFAFA',
        },
      }}
    >
      <Grid size={10} height='100%' container>
        <Grid size={3}>
          <Box height='100%' width='100%' position='relative'>
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid size={8}>
          <Typography variant='body1'>{diaplayTitle}</Typography>
        </Grid>
      </Grid>
      <Grid size={2}>
        <Typography variant='body2'>{duration || '0'} นาที</Typography>
      </Grid>
    </Grid>
  );
}
