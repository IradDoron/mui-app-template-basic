// types
import { StepperProps } from 'shared/core/navigation/Stepper/Stepper.types';

// styles
import { StyledStepper } from 'shared/core/navigation/Stepper/Stepper.styles';

export const Stepper = (props: StepperProps) => {
	return <StyledStepper {...props} />;
};
