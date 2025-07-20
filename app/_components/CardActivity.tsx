import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';
import { Activity, InfoGraphic } from '@/app/type';
import mockCardImage from '@/public/showCaseMock/img-card.svg';
import TimeShow from './TimeShow';
import Link from 'next/link';
import { truncateText } from '../_utils/formatHtml';

export default function CardActivity({
  id,
  title,
  markdownContent,
  thumbnailUrl,
  createdAt,
}: Activity | InfoGraphic) {
  // สร้าง truncated content
  const truncatedContent = React.useMemo(() => {
    return truncateText(markdownContent, 200);
  }, [markdownContent]);

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        position='relative'
        width='100%'
        height={{ xs: '236px', md: '300px' }}
      >
        {
          <Image
            src={thumbnailUrl || mockCardImage.src}
            alt='activity'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'start',
            }}
          />
        }
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h3' component='div'>
          {title}
          <TimeShow times={createdAt} />
        </Typography>

        <Typography variant='body1' sx={{ color: 'text.secondary' }}>
          {truncatedContent}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='text'
          component={Link}
          href={`/blog/${id}`}
          endIcon={<ArrowForward />}
          color='secondary'
        >
          ดูรายละเอียดเพิ่มเติม
        </Button>
      </CardActions>
    </Card>
  );
}
