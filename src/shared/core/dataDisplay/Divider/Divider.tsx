// types
import { DividerProps } from 'shared/core/dataDisplay/Divider/Divider.types';

// styles
import { StyledDivider } from 'shared/core/dataDisplay/Divider/Divider.styles';

export const Divider = (props: DividerProps) => {
	return <StyledDivider {...props} />;
};
