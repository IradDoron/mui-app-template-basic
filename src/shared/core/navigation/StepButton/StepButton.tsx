// types
import { StepButtonProps } from 'shared/core/navigation/StepButton/StepButton.types';

// styles
import { StyledStepButton } from 'shared/core/navigation/StepButton/StepButton.styles';

export const StepButton = (props: StepButtonProps) => {
	return <StyledStepButton {...props} />;
};
