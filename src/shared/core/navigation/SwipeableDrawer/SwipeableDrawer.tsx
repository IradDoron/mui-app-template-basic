// types
import { SwipeableDrawerProps } from 'shared/core/navigation/SwipeableDrawer/SwipeableDrawer.types';

// styles
import { StyledSwipeableDrawer } from 'shared/core/navigation/SwipeableDrawer/SwipeableDrawer.styles';

export const SwipeableDrawer = (props: SwipeableDrawerProps) => {
	return <StyledSwipeableDrawer {...props} />;
};
