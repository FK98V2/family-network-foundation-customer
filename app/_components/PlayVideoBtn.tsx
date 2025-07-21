'use client';
import { PlayCircle } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';

export default function PlayVideoBtn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        variant='text'
        color='secondary'
        sx={{ padding: 0, mt: 1 }}
        endIcon={<PlayCircle sx={{ scale: 0.8 }} />}
        onClick={handleOpen}
      >
        <Typography variant='body1' sx={{ textDecoration: 'underline' }}>
          วิดีโอ 1:47 นาที
        </Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90vw', sm: '80vw', md: '70vw' },
            height: { xs: '50vh', sm: '60vh', md: '70vh' },
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 2,
          }}
        >
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/d5LvrTyNCts?autoplay=1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay; microphone'
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </>
  );
}
