import { Button, Grid2 as Grid, Link } from '@mui/material';
import { Typography } from '@mui/material';
import ContainerSection from './ContainerSection';
import ActivitiesRecent from './ActivitiesRecent';

export default function SectionActivitiesRecent() {
  return (
    <ContainerSection>
      <Grid size={12}>
        <Typography textAlign='center' variant='h2'>
          รวมทุกกิจกรรมจากเครือข่ายครอบครัว
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography textAlign='center' variant='body1'>
          ทุกกิจกรรมคือโอกาสในการเรียนรู้ แบ่งปัน และร่วมสร้างสังคมใหม่
          เริ่มจากครอบครัวคุณเอง
        </Typography>
      </Grid>
      <Grid container size={12} spacing={2}>
        <ActivitiesRecent />
        <Grid container justifyContent='center' size={12}>
          <Button
            component={Link}
            href='/news/activity'
            variant='contained'
            color='secondary'
            size='large'
          >
            ดูกิจกรรมทั้งหมด
          </Button>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
