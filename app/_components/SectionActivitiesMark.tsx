import { Grid2 as Grid, Typography } from '@mui/material';
import ContainerSection from './ContainerSection';
import ActivitiesHighLight from './ActivitiesHighLight';

export default function SectionActivitiesMark() {
  return (
    <ContainerSection isSecoundColor={true}>
      <Grid size={12}>
        <Typography
          variant='h2'
          textAlign='center'
          fontWeight={700}
          gutterBottom
        >
          “เรื่องราวดี ๆ <br />
          จากเครือข่ายครอบครัว”
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant='subtitle1' textAlign='center' gutterBottom>
          กิจกรรมจากทั่วประเทศที่เกิดขึ้นภายใต้ เครือข่ายครอบครัวไทย
          ไม่ใช่แค่การทำเพื่อสังคมแต่คือพื้นที่ที่ทุกครอบครัวได้มีโอกาสเรียนรู้
          เติบโต <br />
          และสนับสนุนกันและกันอย่างแท้จริงทุกเรื่องราวล้วนเต็มไปด้วยพลังแห่งความรัก
          ความร่วมมือ และศรัทธาในคำว่าครอบครัว
        </Typography>
      </Grid>

      <ActivitiesHighLight />
    </ContainerSection>
  );
}
