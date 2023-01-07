// types
import { ListItemButtonProps } from 'shared/core/dataDisplay/ListItemButton/ListItemButton.types';

// styles
import { StyledListItemButton } from 'shared/core/dataDisplay/ListItemButton/ListItemButton.styles';

export const ListItemButton = (props: ListItemButtonProps) => {
	return <StyledListItemButton {...props} />;
};
