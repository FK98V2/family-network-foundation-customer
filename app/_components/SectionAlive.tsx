import { Box, Grid2 as Grid, Typography } from '@mui/material';

import AnimationSlideAuto from './AnimationSlideAuto';
import { ANIMATION_SLIDE_AUTO } from '../constants';

export default function SectionAlive() {
  return (
    <Grid container>
      <Grid
        px='60px'
        py='36px'
        spacing={4}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        size={12}
      >
        <Typography variant='h2' fontWeight={700} gutterBottom>
          “รวมพลังองค์กร สร้างสรรค์เพื่อครอบครัว ไทย”
        </Typography>
        <Box display='flex' flexDirection='column' gap={2}>
          <Typography variant='subtitle1' gutterBottom>
            เราภูมิใจที่ได้ร่วมงานกับพันธมิตรที่หลากหลายซึ่งมีจุดมุ่งหมายเดียวกันนั่นคือการเสริมสร้างความเข้มแข็งให้
            กับครอบครัว และยกระดับคุณภาพชีวิตของเด็กและเยาวชนในสังคมไทย
          </Typography>
          <AnimationSlideAuto
            itemsSx={{ width: '100px', height: '100px' }}
            items={ANIMATION_SLIDE_AUTO}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
