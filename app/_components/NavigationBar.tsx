'use client';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import React from 'react';
import { MENU_ITEMS } from '../constants';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();
  return (
    <>
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography
            variant='subtitle1'
            sx={{
              color: pathname === item.href ? 'secondary.main' : 'inherit',
              py: 1.5,
              fontWeight: 500,
              '&:hover': {
                color: 'secondary.main',
              },
            }}
          >
            {item.title}
          </Typography>
        </Link>
      ))}
    </>
  );
}
