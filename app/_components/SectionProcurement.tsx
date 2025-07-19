import { Grid2 as Grid, Pagination, Paper, Typography } from '@mui/material';
import React from 'react';
import ContainerSection from './ContainerSection';
import ProcurementContent from './ProcurementContent';

export default function SectionProcurement() {
  return (
    <ContainerSection
      id='procurement-section'
      isMaxContent={true}
      isSecoundColor={true}
    >
      <Grid container justifyContent='center' alignItems='start' size={12}>
        <Grid size={{ xs: 12, md: 10 }}>
          <Paper
            sx={{
              p: { xs: 1, md: 4 },
            }}
          >
            <Grid container justifyContent='center' size={12}></Grid>
            <Grid size={12} container spacing={2}>
              <Grid size={12}>
                <Typography variant='h2' textAlign='center'>
                  การจัดซื้อจัดจ้าง
                </Typography>
              </Grid>

              <Grid
                display={{ xs: 'block', md: 'none' }}
                container
                justifyContent='center'
                size={12}
              >
                <Pagination size='small' color='secondary' count={10} />
              </Grid>
              <ProcurementContent />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
