// types
import { IconButtonProps } from 'shared/core//inputs/IconButton/IconButton.types';

// styles
import { StyledIconButton } from 'shared/core/inputs/IconButton/IconButton.styles';

export const IconButton = (props: IconButtonProps) => {
	return <StyledIconButton {...props} />;
};
