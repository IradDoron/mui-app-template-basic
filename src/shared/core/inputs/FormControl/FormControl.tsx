import { FormControlProps } from 'shared/core//inputs/FormControl/FormControl.types';

import { StyledFormControl } from 'shared/core/inputs/FormControl/FormControl.styles';

export const FormControl = (props: FormControlProps) => {
	return <StyledFormControl {...props} />;
};
