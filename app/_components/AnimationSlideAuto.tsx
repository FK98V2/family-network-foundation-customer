'use client';
import { Box, SxProps } from '@mui/material';
import React from 'react';
import { useInfiniteScroll } from '@/app/_hooks/useInfiniteScroll';
import Image from 'next/image';

interface Props {
  animationDuration?: number;
  itemsSx?: SxProps;
  items?: {
    image: string;
  }[];
}

export default function AnimationSlideAuto({
  animationDuration = 40,
  itemsSx,
  items = [],
}: Props) {
  const { containerRef, scrollRef } = useInfiniteScroll();
  const doubledItems = [...items, ...items];

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
        cursor: 'grab',
        position: 'relative',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 2,
          animation: `scroll ${animationDuration}s linear infinite`,
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {doubledItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 'none',
            }}
          >
            <Box position='relative' sx={itemsSx}>
              <Image
                src={item.image}
                alt='img'
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
