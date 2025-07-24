'use client';
import { AccessTime } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import { formatThaiDateTime } from '../_utils/formatDateTime';

interface Props {
  times: number | string;
}

export default function TimeShow({ times }: Props) {
  return (
    <Typography display='flex' alignItems='center' gap={1} variant='body2'>
      <AccessTime sx={{ fontSize: '1rem' }} /> {formatThaiDateTime(times)}
    </Typography>
  );
}
