import React from 'react';
import SectionPlayIntroduce from './SectionPlayIntroduce';
import { Grid2 as Grid } from '@mui/material';
import SectionAnnouncement from './SectionAnnouncement';

export default function SectionWelcome() {
  return (
    <Grid my={1} container>
      <SectionAnnouncement showIntroduce={true} />
      <SectionPlayIntroduce />
    </Grid>
  );
}
