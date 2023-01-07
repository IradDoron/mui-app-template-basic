// types
import { ListItemProps } from 'shared/core/dataDisplay/ListItem/ListItem.types';

// styles
import { StyledListItem } from 'shared/core/dataDisplay/ListItem/ListItem.styles';

export const ListItem = (props: ListItemProps) => {
	return <StyledListItem {...props} />;
};
