// types
import { MenuProps } from 'shared/core/navigation/Menu/Menu.types';

// styles
import { StyledMenu } from 'shared/core/navigation/Menu/Menu.styles';

export const Menu = (props: MenuProps) => {
	return <StyledMenu {...props} />;
};
