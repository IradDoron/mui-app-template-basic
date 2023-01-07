// types
import { LinearProgressProps } from 'shared/core/feedback/LinearProgress/LinearProgress.types';

// styles
import { StyledLinearProgress } from 'shared/core/feedback/LinearProgress/LinearProgress.styles';

export const LinearProgress = (props: LinearProgressProps) => {
	return <StyledLinearProgress {...props} />;
};
