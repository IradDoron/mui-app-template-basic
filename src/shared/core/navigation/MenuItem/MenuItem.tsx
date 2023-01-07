// types
import { MenuItemProps } from 'shared/core/navigation/MenuItem/MenuItem.types';

// styles
import { StyledMenuItem } from 'shared/core/navigation/MenuItem/MenuItem.styles';

export const MenuItem = (props: MenuItemProps) => {
	return <StyledMenuItem {...props} />;
};
