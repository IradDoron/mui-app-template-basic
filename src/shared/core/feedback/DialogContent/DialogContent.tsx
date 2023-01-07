// types
import { DialogContentProps } from 'shared/core/feedback/DialogContent/DialogContent.types';

// styles
import { StyledDialogContent } from 'shared/core/feedback/DialogContent/DialogContent.styles';

export const DialogContent = (props: DialogContentProps) => {
	return <StyledDialogContent {...props} />;
};
