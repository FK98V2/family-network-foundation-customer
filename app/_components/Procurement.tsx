import { AttachFile } from '@mui/icons-material';
import { Button, Divider } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import { Procurement as ProcurementType } from '../type';
import TimeShow from './TimeShow';

export default function Procurement({
  title,
  documentUrl,
  createdAt,
}: ProcurementType) {
  return (
    <Grid container size={12}>
      <Grid size={12}>
        <Divider sx={{ height: 'max-content', bgcolor: 'secondary.100' }} />
      </Grid>

      <Grid size={12}>
        <Button
          href={documentUrl}
          target='_blank'
          startIcon={<AttachFile />}
          sx={{
            height: 'max-content',
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
          {title}
        </Button>
      </Grid>
      <Grid size={12}>
        <TimeShow times={createdAt} />
      </Grid>
    </Grid>
  );
}
