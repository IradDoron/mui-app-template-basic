import { StyledPaper } from 'shared/core/surfaces/Paper/Paper.styles';
import { PaperProps } from 'shared/core/surfaces/Paper/Paper.types';

export const Paper = (props: PaperProps) => {
	return <StyledPaper {...props} />;
};
