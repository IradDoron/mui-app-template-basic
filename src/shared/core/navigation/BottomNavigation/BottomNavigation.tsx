// types
import { BottomNavigationProps } from 'shared/core/navigation/BottomNavigation/BottomNavigation.types';

// styles
import { StyledBottomNavigation } from 'shared/core/navigation/BottomNavigation/BottomNavigation.styles';

export const BottomNavigation = (props: BottomNavigationProps) => {
	return <StyledBottomNavigation {...props} />;
};
