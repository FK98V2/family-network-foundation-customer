import { Box, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderBar() {
  return (
    <Grid height='44px' container>
      <Grid
        display='flex'
        bgcolor='secondary.main'
        alignItems='center'
        px={2}
        size={{ xs: 12, md: 'grow' }}
      >
        <Typography variant='subtitle2' color='white'>
          มูลนิธิเครือข่ายครอบครัว
        </Typography>
      </Grid>
      <Grid
        display='flex'
        alignItems='center'
        justifyContent='end'
        bgcolor='white'
        px={2}
        gap={2}
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
        size={{ md: 'auto' }}
      >
        {SOCIAL_LINKS.map((link) => (
          <Box display='flex' alignItems='center' gap={2} key={link.href}>
            <Link
              key={link.href}
              href={link.href}
              target='_blank'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Image
                src={link.icon.src}
                alt={link.title}
                width={24}
                height={24}
              />
              <Typography
                py={1}
                variant='body1'
                sx={{
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                {link.title}
              </Typography>
            </Link>
            |
          </Box>
        ))}
        {CONTACT_INFO.map((info) => (
          <Box key={info.href} display='flex' alignItems='center' gap={2}>
            <Image
              src={info.icon.src}
              alt={info.title}
              width={24}
              height={24}
            />
            <Typography variant='subtitle2'>{info.title}</Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
