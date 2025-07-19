import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import { GRADIENT_BG } from '../theme';

interface Props {
  children: React.ReactNode;
  isSecoundColor?: boolean;
  isMaxContent?: boolean;
  id?: string;
}

export default function ContainerSection({
  children,
  isSecoundColor,
  isMaxContent = false,
  id,
}: Props) {
  return (
    <Grid
      id={id}
      sx={{
        background: isSecoundColor ? GRADIENT_BG : 'white',
      }}
      minHeight={isMaxContent ? 'max-content' : '80vh'}
      container
    >
      <Grid
        maxWidth={'1440px'}
        mx='auto'
        px='60px'
        my='auto'
        py='36px'
        spacing={4}
        size={12}
        container
      >
        {children}
      </Grid>
    </Grid>
  );
}
