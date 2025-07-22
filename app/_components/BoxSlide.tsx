'use client';
import {
  Box,
  Button,
  Grid2 as Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GRADIENT_BG } from '../theme';
import { useSlideShow } from '@/app/_hooks/useSlideShow';
import { Annoucement } from '@/app/type';
import TimeShow from './TimeShow';
import Link from 'next/link';

interface Props {
  items: Annoucement[];
  showIntroduce?: boolean;
}

export default function BoxSlide({ items, showIntroduce = false }: Props) {
  const introduce: Partial<Annoucement> = {
    title: '“รวมพลังครอบครัว สร้างสังคมอบอุ่นไปด้วยกัน”',
    description:
      'มูลนิธิเครือข่ายครอบครัว มีบทบาทในการประสานและสร้างความตระหนักในการส่งเสริมสถาบันครอบครัวให้เกิดขึ้นทั้งในบุคคล ชุมชน และสังคม ด้วยการนำเสนอกระบวนการรวมกลุ่มเป็นเครือข่ายความร่วมมือ ช่วยเหลือเกื้อกูลกันและเรียกร้องต่อรองสิทธิอันพึงมีของครอบครัว  พันธกิจที่สำคัญของเราคือ ส่งเสริมให้พ่อแม่ใช้โอกาสเป็นพ่อแม่ของตนอย่างมีคุณค่า เพื่อทำหน้าที่ยิ่งใหญ่ให้ประสบผลสำเร็จนั่นคือหน้าที่ของความเป็นพ่อแม่นั่นเอง',
  };

  const displayItems = showIntroduce ? [introduce, ...items] : items;
  const {
    currentSlide,
    getSlidePosition,
    handlePrevSlide,
    handleNextSlide,
    stopAutoPlay,
  } = useSlideShow({
    totalSlides: displayItems.length || 0,
    intervalSeconds: 5,
  });

  if (!displayItems.length) return null;

  return (
    <Grid size={{ xs: 12, md: 4 }} container>
      <Grid
        px='25px'
        py='36px'
        height='100%'
        sx={{
          background: GRADIENT_BG,
          position: 'relative',
          overflow: 'hidden',
        }}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        size={12}
      >
        <Grid
          sx={{
            transform: `translateX(${getSlidePosition(currentSlide)}%)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
            width: '100%',
          }}
        >
          {displayItems?.map((announcement, index) => (
            <Grid
              key={index}
              sx={{
                width: '100%',
                flex: 'none',
                height: 'auto',
              }}
              px={'30px'}
              container
              alignItems='center'
              spacing={2}
            >
              <Grid size={12}>
                <Typography variant='h2' whiteSpace='pre-line'>
                  {showIntroduce && index === 0 ? '' : 'ข่าวสาร:'}{' '}
                  {announcement?.title}
                  {announcement?.createdAt && (
                    <TimeShow times={announcement.createdAt} />
                  )}
                </Typography>
                <Typography variant='body1' mt={2}>
                  {announcement.description}
                </Typography>
              </Grid>
              {announcement.link && (
                <Grid>
                  <Button
                    component={Link}
                    target='_blank'
                    href={announcement.link}
                    variant='contained'
                    color='secondary'
                  >
                    อ่านเพิ่มเติม
                  </Button>
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>

        <Grid
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          size={12}
        >
          <Grid display='flex' gap={1}>
            {displayItems?.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: currentSlide === index ? 'secondary.main' : 'gray',
                  transition: 'background-color 0.3s',
                }}
              />
            ))}
          </Grid>

          <Grid>
            <IconButton
              color='secondary'
              onClick={handlePrevSlide}
              onMouseEnter={stopAutoPlay}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              color='secondary'
              onClick={handleNextSlide}
              onMouseEnter={stopAutoPlay}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
