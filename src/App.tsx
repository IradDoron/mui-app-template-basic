// imports from 3rd party libraries
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

// components
import { NavBar } from 'components/NavBar';
import { Router } from 'components/Router/';

// helpers
import { getDesignTokens } from 'utils/helpers/themeHelpers';

// store
import { themeState } from 'store';

export const App = () => {
	const theme = useRecoilValue(themeState);

	return (
		<ThemeProvider theme={createTheme(getDesignTokens(theme))}>
			<CssBaseline />
			<>
				<NavBar />
				<Router />
			</>
		</ThemeProvider>
	);
};

export default App;
