// types
import { DrawerProps } from 'shared/core/navigation/Drawer/Drawer.types';

// styles
import { StyledDrawer } from 'shared/core/navigation/Drawer/Drawer.styles';

export const Drawer = (props: DrawerProps) => {
	return <StyledDrawer {...props} />;
};
