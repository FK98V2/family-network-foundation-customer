import { Button, Grid2 as Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ContainerSection from './ContainerSection';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';

export default function SectionGame() {
  return (
    <ContainerSection>
      <Grid
        order={{ xs: 1, md: 2 }}
        size={{ xs: 12, md: 6 }}
        container
        spacing={4}
      >
        <Grid
          display='flex'
          justifyContent='center'
          alignItems='start'
          size={12}
          container
          order={{ xs: 1, md: 2 }}
        >
          <Button
            component={Link}
            target='_blank'
            variant='outlined'
            color='secondary'
            endIcon={
              <ArrowForward sx={{ fontSize: '1rem', color: 'secondary' }} />
            }
            sx={{
              fontWeight: 700,
              fontSize: '1.2rem',
              borderRadius: '10px',
              textTransform: 'none',
              animation: 'cloudFloat 3s ease-in-out infinite',
              '@keyframes cloudFloat': {
                '0%, 100%': {
                  transform: 'translateY(0px)',
                },
                '50%': {
                  transform: 'translateY(-8px)',
                },
              },
              '&:hover': {
                opacity: 0.8,
                animation: 'cloudFloat 1.5s ease-in-out infinite',
              },
            }}
            href='https://www.spatial.io/s/Electronic-Cigarette-Exhibition-6818ab89021e15e02d84b116?share=8112305362199440867'
          >
            เล่นเกมสนุก <br />
            พร้อมเรียนรู้ภัยจากบุหรี่ไฟฟ้า
          </Button>
        </Grid>
        <Grid
          height='300px'
          position='relative'
          size={12}
          order={{ xs: 2, md: 1 }}
          sx={{
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={'/game/game-1.png'}
            alt='game'
            style={{
              objectFit: 'cover',
            }}
            fill
          />
        </Grid>
      </Grid>

      <Grid order={{ xs: 2, md: 1 }} size={{ xs: 12, md: 6 }}>
        <iframe
          style={{
            border: 'none',
            borderRadius: '10px',
          }}
          height='600px'
          width='100%'
          src='https://www.spatial.io/s/Electronic-Cigarette-Exhibition-6818ab89021e15e02d84b116?share=8112305362199440867'
          title='Electronic Cigarette Exhibition'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </Grid>
    </ContainerSection>
  );
}
