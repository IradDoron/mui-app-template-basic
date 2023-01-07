import { atom, RecoilState } from 'recoil';

import { CustomPaletteModeState } from 'types';

export const themeState = atom({
	key: 'themeState',
	default: 'light',
}) as RecoilState<CustomPaletteModeState>;
