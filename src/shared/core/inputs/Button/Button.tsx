import { ButtonProps } from 'shared/core//inputs/Button/Button.types';

import { StyledButton } from 'shared/core/inputs/Button/Button.styles';

export const Button = (props: ButtonProps) => {
	return <StyledButton {...props} />;
};
