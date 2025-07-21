import BtnBackHistory from '@/app/_components/BtnBackHistory';
import ContainerSection from '@/app/_components/ContainerSection';
import TimeShow from '@/app/_components/TimeShow';
import { getBlog } from '@/app/fetch';
import { Box, Button, Grid2 as Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import { FilePresent } from '@mui/icons-material';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Blog({ params }: Props) {
  const { id } = await params;
  const {
    data: { createdAt, title, thumbnailUrl, markdownContent, attachments },
  } = await getBlog(id);

  return (
    <ContainerSection>
      <Grid maxWidth='700px' mx='auto' container size={12}>
        <Grid size={12}>
          <BtnBackHistory />
        </Grid>
        <Grid size={12}>
          <Typography variant='h1'>
            {title}
            <TimeShow times={createdAt} />
          </Typography>
        </Grid>
        <Grid container justifyContent='center' size={12}>
          <Box position='relative' width='100%' height='425px'>
            <Image
              src={thumbnailUrl}
              alt='activity'
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'start',
              }}
            />
          </Box>
        </Grid>
        <Grid size={12}>
          <Typography variant='h6'>{parse(markdownContent)}</Typography>
        </Grid>
        {attachments.length > 0 && (
          <Grid size={12}>
            <Typography variant='h3'>ดาวน์โหลดไฟล์:</Typography>
          </Grid>
        )}
        <Grid size={12}>
          {attachments.map((attachment) => (
            <Button
              startIcon={<FilePresent />}
              component={Link}
              href={attachment.url}
              key={attachment.name}
              target='_blank'
              rel='noopener noreferrer'
              color='secondary'
              variant='text'
            >
              {attachment.name}
            </Button>
          ))}
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
