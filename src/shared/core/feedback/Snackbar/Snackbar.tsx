// types
import { SnackbarProps } from 'shared/core/feedback/Snackbar/Snackbar.types';

// styles
import { StyledSnackbar } from 'shared/core/feedback/Snackbar/Snackbar.styles';

export const Snackbar = (props: SnackbarProps) => {
	return <StyledSnackbar {...props} />;
};
