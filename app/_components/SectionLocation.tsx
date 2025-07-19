import { Box, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import ContainerSection from './ContainerSection';
import Map from './Map';
import { AccessTimeFilled, LocationOn } from '@mui/icons-material';

export default function SectionLocation() {
  return (
    <ContainerSection isMaxContent={true}>
      <Grid size={12}>
        <Typography variant='h2' gutterBottom>
          อาคารสำนักงาน
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Map />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grid mb={2} height='max-content' size={12}>
          <Box display='flex' gap={2}>
            <LocationOn sx={{ color: 'red' }} />
            <Box display='flex' flexDirection='column' gap={1}>
              <Typography variant='body1' gutterBottom>
                Google Map
              </Typography>
              <Typography
                component='a'
                href='https://maps.app.goo.gl/rNgzkwvQh5hEZt5a9'
                target='_blank'
                variant='body1'
                gutterBottom
              >
                77/47  ซอยแจ้งวัฒนะ 15 แยก 2 แขวงทุ่งสองห้อง เขตหลักสี่
                กรุงเทพมหานคร
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={12}>
          <Box display='flex' gap={2}>
            <AccessTimeFilled sx={{ color: 'secondary.light' }} />
            <Box display='flex' flexDirection='column' gap={1}>
              <Typography variant='body1' gutterBottom>
                วันจันทร์ - ศุกร์ 9.00-16.00 น.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
