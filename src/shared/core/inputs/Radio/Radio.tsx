import { RadioProps } from 'shared/core//inputs/Radio/Radio.types';

import { StyledRadio } from 'shared/core/inputs/Radio/Radio.styles';

export const Radio = (props: RadioProps) => {
	return <StyledRadio {...props} />;
};
