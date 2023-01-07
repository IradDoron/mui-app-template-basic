// types
import { AppBarProps } from 'shared/core/surfaces/AppBar/AppBar.types';

// styles
import { StyledAppBar } from 'shared/core/surfaces/AppBar/AppBar.styles';

export const AppBar = (props: AppBarProps) => {
	return <StyledAppBar {...props} />;
};
