import { StyledDialog } from 'shared/core/feedback/Dialog/Dialog.styles';
import { DialogProps } from 'shared/core/feedback/Dialog/Dialog.types';

export const Dialog = (props: DialogProps) => {
	return <StyledDialog {...props} />;
};
