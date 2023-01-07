import { FormGroupProps } from 'shared/core//inputs/FormGroup/FormGroup.types';

import { StyledFormGroup } from 'shared/core/inputs/FormGroup/FormGroup.styles';

export const FormGroup = (props: FormGroupProps) => {
	return <StyledFormGroup {...props} />;
};
