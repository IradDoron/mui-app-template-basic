// types
import { DialogProps } from 'shared/core/feedback/Dialog/Dialog.types';

// styles
import { StyledDialog } from 'shared/core/feedback/Dialog/Dialog.styles';

export const Dialog = (props: DialogProps) => {
	return <StyledDialog {...props} />;
};
