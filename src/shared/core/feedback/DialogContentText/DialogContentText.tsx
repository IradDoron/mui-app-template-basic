// types
import { DialogContentTextProps } from 'shared/core/feedback/DialogContentText/DialogContentText.types';

// styles
import { StyledDialogContentText } from 'shared/core/feedback/DialogContentText/DialogContentText.styles';

export const DialogContentText = (props: DialogContentTextProps) => {
	return <StyledDialogContentText {...props} />;
};
