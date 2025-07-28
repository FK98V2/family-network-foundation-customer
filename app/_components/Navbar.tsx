import { Grid2 as Grid, Link } from '@mui/material';
import Image from 'next/image';

import MobileMenu from './MobileMenu';
import NavigationBar from './NavigationBar';

export default function Navbar() {
  return (
    <>
      <Grid
        size={12}
        height='116px'
        container
        bgcolor='primary.main'
        sx={{ xs: { px: 2 } }}
      >
        <Grid
          component={Link}
          href='/'
          display='flex'
          alignItems='center'
          size={{ xs: 6, md: 2 }}
        >
          <Image src='/logo.svg' alt='logo' width={100} height={100} />
        </Grid>

        <Grid
          display={{ xs: 'none', md: 'flex' }}
          gap={4}
          alignItems='center'
          size={{ xs: 6, md: 6 }}
        >
          <NavigationBar />
        </Grid>

        <Grid
          display={{ xs: 'flex', md: 'none' }}
          alignItems='center'
          justifyContent='flex-end'
          size={{ xs: 6 }}
        >
          <MobileMenu />
        </Grid>
      </Grid>
    </>
  );
}
