import { StyledSnackbar } from 'shared/core/feedback/Snackbar/Snackbar.styles';
import { SnackbarProps } from 'shared/core/feedback/Snackbar/Snackbar.types';

export const Snackbar = (props: SnackbarProps) => {
	return <StyledSnackbar {...props} />;
};
