// types
import { PaginationItemProps } from 'shared/core/navigation/PaginationItem/PaginationItem.types';

// styles
import { StyledPaginationItem } from 'shared/core/navigation/PaginationItem/PaginationItem.styles';

export const PaginationItem = (props: PaginationItemProps) => {
	return <StyledPaginationItem {...props} />;
};
