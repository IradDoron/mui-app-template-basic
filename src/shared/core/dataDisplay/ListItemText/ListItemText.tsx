// types
import { ListItemTextProps } from 'shared/core/dataDisplay/ListItemText/ListItemText.types';

// styles
import { StyledListItemText } from 'shared/core/dataDisplay/ListItemText/ListItemText.styles';

export const ListItemText = (props: ListItemTextProps) => {
	return <StyledListItemText {...props} />;
};
