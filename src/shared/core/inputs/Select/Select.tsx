import { SelectProps } from 'shared/core//inputs/Select/Select.types';

import { StyledSelect } from 'shared/core/inputs/Select/Select.styles';

export const Select = (props: SelectProps) => {
	return <StyledSelect {...props} />;
};
