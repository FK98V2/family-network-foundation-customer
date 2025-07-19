import { ArticleOutlined } from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import TimeShow from './TimeShow';
import Link from 'next/link';

interface Props {
  id: number;
  title: string;
  markdownContent: string;
  thumbnailUrl: string;
  createdAt: number;
}

export default function Article({
  id,
  title,
  markdownContent,
  createdAt,
}: Props) {
  return (
    <Grid container direction='column' size={12}>
      <Divider sx={{ bgcolor: 'secondary.100' }} />
      <Button
        startIcon={<ArticleOutlined />}
        component={Link}
        href={`/blog/${id}`}
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
        {title}
      </Button>
      <TimeShow times={createdAt} />
      <Typography variant='body1'>{markdownContent}</Typography>
    </Grid>
  );
}
