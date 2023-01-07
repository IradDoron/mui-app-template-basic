// types
import { ChipProps } from 'shared/core/dataDisplay/Chip/Chip.types';

// styles
import { StyledChip } from 'shared/core/dataDisplay/Chip/Chip.styles';

export const Chip = (props: ChipProps) => {
	return <StyledChip {...props} />;
};
