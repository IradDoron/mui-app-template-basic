import { StyledAppBar } from 'shared/core/surfaces/AppBar/AppBar.styles';
import { AppBarProps } from 'shared/core/surfaces/AppBar/AppBar.types';

export const AppBar = (props: AppBarProps) => {
	return <StyledAppBar {...props} />;
};
