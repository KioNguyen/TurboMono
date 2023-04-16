// @mui

/* eslint-disable react/display-name */
// icons
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { forwardRef } from 'react';

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }: any, ref) => (
  <Box
    ref={ref}
    component={Icon}
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

export default Iconify;
