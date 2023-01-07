// types
import { CircularProgressProps } from 'shared/core/feedback/CircularProgress/CircularProgress.types';

// styles
import { StyledCircularProgress } from 'shared/core/feedback/CircularProgress/CircularProgress.styles';

export const CircularProgress = (props: CircularProgressProps) => {
	return <StyledCircularProgress {...props} />;
};
