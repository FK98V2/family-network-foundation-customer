import { Box, Divider, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import NavigationBar from './NavigationBar';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  return (
    <Grid
      container
      size={12}
      bgcolor='white'
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        p: 3,
      }}
    >
      <Grid
        size={12}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box sx={{ width: 100, height: 100, position: 'relative' }}>
          <Image
            src='/logo.svg'
            alt='logo'
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <CloseIcon
          onClick={onClose}
          sx={{
            cursor: 'pointer',
            fontSize: 40,
            color: 'text.primary',
          }}
        />
      </Grid>

      <Grid size={12} component='nav'>
        <NavigationBar />
      </Grid>

      <Grid size={12}>
        <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
          ช่องทางข้อมูลข่าวสาร
        </Typography>
        <Divider sx={{ borderColor: 'secondary.main' }} />
        {SOCIAL_LINKS.map((link) => (
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
        ))}
        {CONTACT_INFO.map((info) => (
          <Link
            key={info.href}
            href={info.href}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Image
              src={info.icon.src}
              alt={info.title}
              width={24}
              height={24}
            />
            <Typography
              variant='body1'
              sx={{
                py: 1,
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              {info.title}
            </Typography>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}
