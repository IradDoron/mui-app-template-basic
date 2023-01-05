import { ButtonGroupProps } from 'shared/core//inputs/ButtonGroup/ButtonGroup.types';

import { StyledButtonGroup } from 'shared/core/inputs/ButtonGroup/ButtonGroup.styles';

export const ButtonGroup = (props: ButtonGroupProps) => {
	return <StyledButtonGroup {...props} />;
};
