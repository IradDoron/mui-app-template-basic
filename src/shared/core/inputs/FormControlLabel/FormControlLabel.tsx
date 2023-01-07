import { FormControlLabelProps } from 'shared/core//inputs/FormControlLabel/FormControlLabel.types';

import { StyledFormControlLabel } from 'shared/core/inputs/FormControlLabel/FormControlLabel.styles';

export const FormControlLabel = (props: FormControlLabelProps) => {
	return <StyledFormControlLabel {...props} />;
};
