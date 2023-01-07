// types
import { AlertProps } from 'shared/core/feedback/Alert/Alert.types';

// styles
import { StyledAlert } from 'shared/core/feedback/Alert/Alert.styles';

export const Alert = (props: AlertProps) => {
	return <StyledAlert {...props} />;
};
