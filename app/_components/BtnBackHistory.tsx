'use client';
import { ArrowBackIosNew } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function BtnBackHistory() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant='text'
      color='secondary'
      startIcon={<ArrowBackIosNew />}
    >
      ย้อนกลับ
    </Button>
  );
}
