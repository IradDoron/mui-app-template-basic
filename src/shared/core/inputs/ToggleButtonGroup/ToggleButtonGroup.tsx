import { ToggleButtonGroupProps } from 'shared/core//inputs/ToggleButtonGroup/ToggleButtonGroup.types';

import { StyledToggleButtonGroup } from 'shared/core/inputs/ToggleButtonGroup/ToggleButtonGroup.styles';

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
	return <StyledToggleButtonGroup {...props} />;
};
