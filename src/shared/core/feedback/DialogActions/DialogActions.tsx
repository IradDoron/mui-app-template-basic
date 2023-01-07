// types
import { DialogActionsProps } from 'shared/core/feedback/DialogActions/DialogActions.types';

// styles
import { StyledDialogActions } from 'shared/core/feedback/DialogActions/DialogActions.styles';

export const DialogActions = (props: DialogActionsProps) => {
	return <StyledDialogActions {...props} />;
};
