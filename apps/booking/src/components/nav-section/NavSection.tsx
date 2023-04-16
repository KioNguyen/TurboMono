// @mui
//
import { Box, List, ListItemText } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------
export default function NavSection({ data = [], ...other }: any) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item: any) => (
          <NavItem key={item.title || undefined} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------
function NavItem({ item }: { item: any }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={null}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
          width: '100%',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
