// types
import { BottomNavigationActionProps } from 'shared/core/navigation/BottomNavigationAction/BottomNavigationAction.types';

// styles
import { StyledBottomNavigationAction } from 'shared/core/navigation/BottomNavigationAction/BottomNavigationAction.styles';

export const BottomNavigationAction = (props: BottomNavigationActionProps) => {
	return <StyledBottomNavigationAction {...props} />;
};
