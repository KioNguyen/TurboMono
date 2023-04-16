import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from '@mui/material';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { useState } from 'react';

import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
  },
];

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  // minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function AccountPopover() {
  const [openAccountPopover, setOpenAccountPopover] = useState(null);

  const handleOpen = (event: any) => {
    setOpenAccountPopover(event.currentTarget);
  };

  const handleClose = () => {
    setOpenAccountPopover(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...((openAccountPopover as any) &&
            ({
              '&:before': {
                zIndex: 1,
                content: '\'\'',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: (theme: any) => alpha(theme.palette.grey[900], 0.8),
              },
            } as object)),
        }}
      >
        <Avatar src={'DEMO'} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(openAccountPopover)}
        anchorEl={openAccountPopover}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 250,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <>
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {'DEMO'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {'DEMO'}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack sx={{ p: 1 }}>
            {MENU_OPTIONS.map((option) => (
              <MenuItem key={option.label} onClick={handleClose}>
                {option.label}
              </MenuItem>
            ))}
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <MenuItem sx={{ m: 1 }}>Logout</MenuItem>
        </>
      </Popover>
    </>
  );
}
