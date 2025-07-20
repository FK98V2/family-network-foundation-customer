import { Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import PlayVideoBtn from './PlayVideoBtn';
import AnimationSlideAuto from './AnimationSlideAuto';
import { ANIMATION_SLIDE_AUTO } from '../constants';

export default function SectionPlayIntroduce() {
  return (
    <>
      <Grid container size={{ xs: 12, md: 8 }}>
        <Grid display={{ xs: 'none', md: 'block' }} size={12}>
          <AnimationSlideAuto
            animationDuration={120}
            itemsSx={{ width: '425px', height: '425px' }}
            items={ANIMATION_SLIDE_AUTO}
          />
        </Grid>
        <Grid my={1} px={2} size={12}>
          <Typography variant='h1'>มูลนิธิเครือข่ายครอบครัว</Typography>
          <Typography variant='body1' mt={1}>
            พักสักครู่ แล้วมารับแรงบันดาลใจจากเรื่องราว
            &ldquo;การเดินทางของมูลนิธิเครือข่ายครอบครัว&rdquo;
          </Typography>
          <PlayVideoBtn />
        </Grid>
      </Grid>
    </>
  );
}
