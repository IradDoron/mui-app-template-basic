import { RadioGroupProps } from 'shared/core//inputs/RadioGroup/RadioGroup.types';

import { StyledRadioGroup } from 'shared/core/inputs/RadioGroup/RadioGroup.styles';

export const RadioGroup = (props: RadioGroupProps) => {
	return <StyledRadioGroup {...props} />;
};
