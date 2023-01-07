import { CheckboxProps } from 'shared/core//inputs/Checkbox/Checkbox.types';

import { StyledCheckbox } from 'shared/core/inputs/Checkbox/Checkbox.styles';

export const Checkbox = (props: CheckboxProps) => {
	return <StyledCheckbox {...props} />;
};
