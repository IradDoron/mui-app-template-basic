import { FormLabelProps } from 'shared/core//inputs/FormLabel/FormLabel.types';

import { StyledFormLabel } from 'shared/core/inputs/FormLabel/FormLabel.styles';

export const FormLabel = (props: FormLabelProps) => {
	return <StyledFormLabel {...props} />;
};
