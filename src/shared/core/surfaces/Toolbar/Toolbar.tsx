// types
import { ToolbarProps } from 'shared/core/surfaces/Toolbar/Toolbar.types';

// styles
import { StyledToolbar } from 'shared/core/surfaces/Toolbar/Toolbar.styles';

export const Toolbar = (props: ToolbarProps) => {
	return <StyledToolbar {...props} />;
};
