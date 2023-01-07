// imports from 3rd party libraries
import {
	Menu as MenuIcon,
	Settings as SettingsIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// componnets
import { SettingDrawer } from 'components/SettingDrawer/SettingDrawer';
import { IconButton, NavLink } from 'shared/core/inputs';
import { Box, Container } from 'shared/core/layout';
import { Menu, MenuItem } from 'shared/core/navigation';
import { AppBar, Toolbar } from 'shared/core/surfaces';

// helpers
import { stringHelpers } from 'utils/helpers/stringHelpers';

// store
import { isSettingDrawerOpenState } from 'store';

const VIEWS_TITLES = ['Home', 'About', 'Contact'];

export const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useRecoilState(
		isSettingDrawerOpenState
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleToggleSettingDrawer = () => {
		setIsSettingDrawerOpen(!isSettingDrawerOpen);
	};

	return (
		<AppBar
			sx={{
				position: 'relative',
			}}
		>
			<Container maxWidth="xl">
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
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
								<MenuItem
									key={page}
									sx={{
										padding: 0,
									}}
								>
									<NavLink
										onClick={handleCloseNavMenu}
										to={`/${stringHelpers.toKebabCase(page)}`}
										sx={{
											color: 'inherit',
											textDecoration: 'none',
											backgroundColor: 'transparent',
											width: '100%',
											height: '100%',
											padding: '10px 20px',
											'&:hover': {
												backgroundColor: 'transparent',
												color: 'inherit',
											},
										}}
									>
										{page}
									</NavLink>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={handleToggleSettingDrawer}
						>
							<SettingsIcon />
						</IconButton>
					</Box>
				</Toolbar>
				<SettingDrawer />
			</Container>
		</AppBar>
	);
};
