import { Box, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import { GRADIENT_BG } from '../theme';
import Image from 'next/image';

import { CONTACT_INFO, LOCATION_INFO, SOCIAL_LINKS } from '@/app/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <Grid container>
      <Grid
        px='60px'
        py='36px'
        sx={{
          background: GRADIENT_BG,
        }}
        size={12}
        container
      >
        <Grid size={{ xs: 12, md: 3 }} container spacing={2}>
          <Typography variant='h2' fontWeight={700} gutterBottom>
            มูลนิธิเครือข่ายครอบครัว
          </Typography>
          <Grid container size={12}>
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ textDecoration: 'none', color: 'inherit' }}
                target='_blank'
              >
                <IconButton key={link.href}>
                  <Image
                    src={link.icon.src}
                    alt={link.title}
                    width={24}
                    height={24}
                  />
                </IconButton>
              </Link>
            ))}
          </Grid>
          <Typography variant='subtitle1' gutterBottom>
            {LOCATION_INFO}
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 2 }}
          height='max-content'
          container
          spacing={2}
        >
          <Typography variant='h2' fontWeight={700}>
            ข้อมูลติดต่อ
          </Typography>
          <Grid size={12} container>
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
      </Grid>
    </Grid>
  );
}
