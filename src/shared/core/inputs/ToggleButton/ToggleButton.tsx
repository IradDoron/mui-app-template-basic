import { ToggleButtonProps } from 'shared/core//inputs/ToggleButton/ToggleButton.types';

import { StyledToggleButton } from 'shared/core/inputs/ToggleButton/ToggleButton.styles';

export const ToggleButton = (props: ToggleButtonProps) => {
	return <StyledToggleButton {...props} />;
};
