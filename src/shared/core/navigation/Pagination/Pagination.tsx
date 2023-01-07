// types
import { PaginationProps } from 'shared/core/navigation/Pagination/Pagination.types';

// styles
import { StyledPagination } from 'shared/core/navigation/Pagination/Pagination.styles';

export const Pagination = (props: PaginationProps) => {
	return <StyledPagination {...props} />;
};
