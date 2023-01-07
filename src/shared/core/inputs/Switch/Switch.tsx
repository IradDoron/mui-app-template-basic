import { SwitchProps } from 'shared/core//inputs/Switch/Switch.types';

import { StyledSwitch } from 'shared/core/inputs/Switch/Switch.styles';

export const Switch = (props: SwitchProps) => {
	return <StyledSwitch {...props} />;
};
