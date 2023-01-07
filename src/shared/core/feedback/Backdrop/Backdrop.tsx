// types
import { BackdropProps } from 'shared/core/feedback/Backdrop/Backdrop.types';

// styles
import { StyledBackdrop } from 'shared/core/feedback/Backdrop/Backdrop.styles';

export const Backdrop = (props: BackdropProps) => {
	return <StyledBackdrop {...props} />;
};
