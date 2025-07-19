'use client';
import { Box, Grid2 as Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Objective from './Objective';
import { useSwipeablePages } from '@/app/_hooks/useSwipeablePages';
import { useAutoSlide } from '@/app/_hooks/useAutoSlide';
import { OBJECTIVES } from '@/app/constants';

const AUTO_SLIDE_INTERVAL_SECONDS = 5;
const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(OBJECTIVES.length / ITEMS_PER_PAGE);

export default function AnimationSlidePagination() {
  const [translateX, setTranslateX] = useState(0);
  const {
    currentPage,
    setCurrentPage,
    containerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useSwipeablePages({ totalPages: TOTAL_PAGES });

  const { startInteraction, stopInteraction } = useAutoSlide({
    totalPages: TOTAL_PAGES,
    intervalSeconds: AUTO_SLIDE_INTERVAL_SECONDS,
    onSlide: setCurrentPage,
  });

  useEffect(() => {
    const targetX = -(currentPage * 100);
    setTranslateX(targetX);
  }, [currentPage]);

  // Custom handlers to track user interaction
  const handleInteractionStart = (e: React.TouchEvent | React.MouseEvent) => {
    startInteraction();
    if ('touches' in e) {
      handleTouchStart(e as React.TouchEvent);
    } else {
      handleMouseDown(e as React.MouseEvent);
    }
  };

  const handleInteractionEnd = () => {
    stopInteraction();
    if ('ontouchend' in window) {
      handleTouchEnd();
    } else {
      handleMouseUp();
    }
  };

  // สร้างอาร์เรย์ของหน้าที่จะแสดง
  const pages = Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => {
    const startIndex = pageIndex * ITEMS_PER_PAGE;
    return OBJECTIVES.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  });

  // เพิ่มหน้าแรกต่อท้ายเพื่อทำ infinite scroll
  const allPages = [...pages, pages[0]];

  return (
    <Box
      display={{ xs: 'block', md: 'none' }}
      sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}
    >
      <Box
        ref={containerRef}
        onTouchStart={handleInteractionStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseMove={handleMouseMove}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        sx={{
          display: 'flex',
          transform: `translateX(${translateX}%)`,
          transition: 'transform 0.3s ease-out',
          userSelect: 'none',
        }}
      >
        {allPages.map((page, pageIndex) => (
          <Box
            key={pageIndex}
            sx={{
              width: '100%',
              flexShrink: 0,
            }}
          >
            <Grid container size={12} spacing={4}>
              {page.map((objective) => (
                <Grid size={12} key={objective.index}>
                  <Objective {...objective} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>

      {/* Pagination dots */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          mt: 4,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: currentPage === index ? 'secondary.main' : 'grey.300',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
