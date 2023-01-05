import { StyledAlert } from 'shared/core/feedback/Alert/Alert.styles';
import { AlertProps } from 'shared/core/feedback/Alert/Alert.types';

export const Alert = (props: AlertProps) => {
	return <StyledAlert {...props} />;
};
