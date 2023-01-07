// imports from 3rd party libraries
import { useRecoilState } from 'recoil';

// components
import { ToggleButton, ToggleButtonGroup } from 'shared/core/inputs';
import { Box, Section, Stack } from 'shared/core/layout';
import { Drawer } from 'shared/core/navigation';

// helpers
import { stringHelpers } from 'utils/helpers/stringHelpers';

// store
import { isSettingDrawerOpenState, themeState } from 'store';

// constants
import { THEMES_NAMES } from 'utils/constants';

export const SettingDrawer = () => {
	const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useRecoilState(
		isSettingDrawerOpenState
	);

	const [theme, setTheme] = useRecoilState(themeState);

	const toggleDrawer = (open: boolean) => {
		setIsSettingDrawerOpen(open);
	};

	const handleThemeChange = (
		event: React.MouseEvent<HTMLElement>,
		newTheme: typeof THEMES_NAMES[number]
	) => {
		setTheme(newTheme);
	};

	return (
		<Box>
			<Drawer
				anchor={'right'}
				open={isSettingDrawerOpen}
				onClose={() => toggleDrawer(false)}
			>
				<Box
					sx={{ width: 250, color: 'white' }}
					onClick={() => toggleDrawer(false)}
					onKeyDown={() => toggleDrawer(false)}
				>
					<Section>
						<Stack>
							<ToggleButtonGroup orientation="vertical" value="dark">
								{THEMES_NAMES.map((themeName) => (
									<ToggleButton
										key={themeName}
										value={themeName}
										selected={theme === themeName}
										onClick={handleThemeChange}
									>
										{stringHelpers.toPascalCase(themeName)}
									</ToggleButton>
								))}
							</ToggleButtonGroup>
						</Stack>
						<Stack></Stack>
					</Section>
				</Box>
			</Drawer>
		</Box>
	);
};
