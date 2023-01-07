import { TextFieldProps } from 'shared/core//inputs/TextField/TextField.types';

import { StyledTextField } from 'shared/core/inputs/TextField/TextField.styles';

export const TextField = (props: TextFieldProps) => {
	return <StyledTextField {...props} />;
};
