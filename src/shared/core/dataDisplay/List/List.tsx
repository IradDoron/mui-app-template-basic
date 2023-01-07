// types
import { ListProps } from 'shared/core/dataDisplay/List/List.types';

// styles
import { StyledList } from 'shared/core/dataDisplay/List/List.styles';

export const List = (props: ListProps) => {
	return <StyledList {...props} />;
};
