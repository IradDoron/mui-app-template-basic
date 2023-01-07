// types
import { BoxProps } from 'shared/core/layout/Box/Box.types';

// styles
import { StyledBox } from 'shared/core/layout/Box/Box.styles';

export const Box = (props: BoxProps) => {
	return <StyledBox {...props} />;
};
