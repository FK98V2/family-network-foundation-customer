'use client';
import { Divider, Grid2 as Grid, Typography } from '@mui/material';
import VideoTap from './VideoTap';
import React, { useState } from 'react';
import { Video } from '../type';

interface Props {
  videos: Video[];
}

export default function MediaVideo({ videos }: Props) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(
    videos[0] || null
  );

  const handleVideoClick = (video: Video) => {
    setIsSelected(true);
    setSelectedVideo(video);
  };

  return (
    <Grid
      height={{ xs: 'max-content', md: '425px' }}
      size={12}
      container
      spacing={2}
    >
      <Grid
        height={{ xs: '170px', md: '100%' }}
        mb={{ xs: 2, md: 0 }}
        size={{ xs: 12, md: 6 }}
      >
        <iframe
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/${
            selectedVideo?.videoUrl
          }?autoplay=1&mute=${isSelected ? 0 : 1}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay;mute'
          allowFullScreen
        />
      </Grid>
      <Grid height={{ xs: 'max-content', md: '100%' }} size={{ xs: 12, md: 6 }}>
        <Grid size={12} container mb={2}>
          <Typography variant='h3' textAlign='center'>
            วิดีโอรวมกิจกรรมมูลนิธิ
          </Typography>
          <Divider />
        </Grid>
        <Grid
          maxHeight={{ xs: '300px', md: '100%' }}
          container
          spacing={2}
          size={12}
          overflow='auto'
        >
          {videos.map((video) => (
            <VideoTap
              idSelected={selectedVideo?.id}
              key={video.id}
              {...video}
              onClick={handleVideoClick}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
