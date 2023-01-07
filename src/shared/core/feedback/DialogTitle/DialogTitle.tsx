// types
import { DialogTitleProps } from 'shared/core/feedback/DialogTitle/DialogTitle.types';

// styles
import { StyledDialogTitle } from 'shared/core/feedback/DialogTitle/DialogTitle.styles';

export const DialogTitle = (props: DialogTitleProps) => {
	return <StyledDialogTitle {...props} />;
};
