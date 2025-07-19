import { Grid2 as Grid, Typography } from '@mui/material';
import AnimationSlidePagination from './AnimationSlidePagination';
import Objective from './Objective';
import { OBJECTIVES } from '../constants';
import ContainerSection from './ContainerSection';

export default function SectionObjective() {
  return (
    <ContainerSection isSecoundColor={true}>
      <Grid size={12}>
        <Typography
          variant='h2'
          textAlign='center'
          fontWeight={700}
          gutterBottom
        >
          “6 เป้าหมาย สร้างพลังให้ <br />
          ครอบครัวไทย”
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant='subtitle1' textAlign='center' gutterBottom>
          รวมวัตถุประสงค์หลักของมูลนิธิ ที่มุ่งสร้างครอบครัวอบอุ่น เด็กมีคุณภาพ
          และสังคมที่ไม่ทอดทิ้งกัน
        </Typography>
      </Grid>
      <AnimationSlidePagination />
      <Grid
        display={{ xs: 'none', md: 'flex' }}
        container
        size={12}
        spacing={12}
      >
        {OBJECTIVES.map((objective) => (
          <Grid size={4} key={objective.index}>
            <Objective {...objective} />
          </Grid>
        ))}
      </Grid>
    </ContainerSection>
  );
}
