// types
import { PaperProps } from 'shared/core/surfaces/Paper/Paper.types';

// styles
import { StyledPaper } from 'shared/core/surfaces/Paper/Paper.styles';

export const Paper = (props: PaperProps) => {
	return <StyledPaper {...props} />;
};
