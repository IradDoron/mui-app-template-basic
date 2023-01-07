// imports from 3rd party libraries
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';

// componnets
import { IconButton, NavLink } from 'shared/core/inputs';
import { Box, Container } from 'shared/core/layout';
import { Menu } from 'shared/core/navigation';
import { AppBar, Toolbar } from 'shared/core/surfaces';

// helpers
import { stringHelpers } from 'utils/helpers/stringHelpers';

const VIEWS_TITLES = ['Home', 'About', 'Contact'];

export const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return (
		<AppBar>
			<Container maxWidth="xl">
				<Toolbar>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{VIEWS_TITLES.map((page) => (
							<NavLink
								key={page}
								onClick={handleCloseNavMenu}
								to={`/${stringHelpers.toKebabCase(page)}`}
							>
								{page}
							</NavLink>
						))}
					</Box>
					<Box
						sx={{
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{VIEWS_TITLES.map((page) => (
								<NavLink
									key={page}
									onClick={handleCloseNavMenu}
									to={`/${stringHelpers.toKebabCase(page)}`}
								>
									{page}
								</NavLink>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
