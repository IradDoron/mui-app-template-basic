import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Button, ButtonGroup } from 'shared/core/inputs';

import { THEMES_NAMES } from 'utils/constants';
import { getDesignTokens } from 'utils/helpers/themeHelpers';

import { themeState } from 'store';

import { CustomPaletteModeState } from 'types';

export const App = () => {
	const theme = useRecoilValue(themeState);
	const setTheme = useSetRecoilState(themeState);

	const handleChangeThemeClick = (theme: CustomPaletteModeState) => {
		setTheme(theme);
	};

	return (
		<ThemeProvider theme={createTheme(getDesignTokens(theme))}>
			<CssBaseline />
			<ButtonGroup>
				{THEMES_NAMES.map((theme: CustomPaletteModeState) => (
					<Button
						key={theme}
						variant="contained"
						onClick={() => handleChangeThemeClick(theme)}
					>
						{theme}
					</Button>
				))}
			</ButtonGroup>
		</ThemeProvider>
	);
};

export default App;
