// imports from 3rd party libraries
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const StyledNavLink = styled(Button)(({ theme }) => ({}));

export const StyledRouterNavLink = styled(RouterNavLink)(({ theme }) => ({
	textDecoration: 'none',
	color: 'inherit',
}));
