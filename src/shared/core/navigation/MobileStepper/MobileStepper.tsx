// types
import { MobileStepperProps } from 'shared/core/navigation/MobileStepper/MobileStepper.types';

// styles
import { StyledMobileStepper } from 'shared/core/navigation/MobileStepper/MobileStepper.styles';

export const MobileStepper = (props: MobileStepperProps) => {
	return <StyledMobileStepper {...props} />;
};
