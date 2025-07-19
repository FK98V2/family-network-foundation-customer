import { Button, Grid2 as Grid, Link } from '@mui/material';
import { Typography } from '@mui/material';
import ContainerSection from './ContainerSection';
import InfoGraphsRecent from './InfoGraphsRecent';

export default function SectionInfoGraphRecent() {
  return (
    <ContainerSection>
      <Grid size={12}>
        <Typography textAlign='start' variant='h2'>
          ศูนย์รวมอินโฟกราฟิก
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography textAlign='start' variant='body1'>
          ข้อมูลสำคัญ ผลลัพธ์ และแรงบันดาลใจในรูปแบบที่เข้าใจง่าย
        </Typography>
      </Grid>
      <Grid container size={12} spacing={2}>
        <InfoGraphsRecent />
        <Grid container justifyContent='center' size={12}>
          <Button
            component={Link}
            href='/media/info-graph'
            variant='contained'
            color='secondary'
            size='large'
          >
            ดูอินโฟกราฟิกทั้งหมด
          </Button>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
