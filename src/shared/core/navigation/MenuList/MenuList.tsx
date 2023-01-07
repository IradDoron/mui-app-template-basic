// types
import { MenuListProps } from 'shared/core/navigation/MenuList/MenuList.types';

// styles
import { StyledMenuList } from 'shared/core/navigation/MenuList/MenuList.styles';

export const MenuList = (props: MenuListProps) => {
	return <StyledMenuList {...props} />;
};
