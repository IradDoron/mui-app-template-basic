// imports from 3rd party libraries
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const StyledNavLink = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	padding: 0,
	'&:hover': {
		backgroundColor: theme.palette.primary.dark,
	},
}));

export const StyledRouterNavLink = styled(RouterNavLink)(({ theme }) => ({
	textDecoration: 'none',
	color: 'inherit',
	padding: '10px 20px',
	height: '100%',
}));
