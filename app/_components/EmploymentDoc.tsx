import { AttachFile } from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import React from 'react';

export default function EmploymentDoc() {
  return (
    <Grid container direction='column' size={12}>
      <Divider sx={{ bgcolor: 'secondary.100' }} />
      <Button
        startIcon={<AttachFile />}
        sx={{
          p: 0,
          textTransform: 'none',
          justifyContent: 'start',
          fontSize: '1rem',
          textAlign: 'start',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        variant='text'
        color='secondary'
        size='small'
      >
        APICES 2025: Registration Opens Wednesday, June 25, 2025
      </Button>
      <Typography variant='body2'>วันที่ 25 มิถุนายน 2025</Typography>
    </Grid>
  );
}
