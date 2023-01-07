// types
import { TablePaginationProps } from 'shared/core/dataDisplay/TablePagination/TablePagination.types';

// styles
import { StyledTablePagination } from 'shared/core/dataDisplay/TablePagination/TablePagination.styles';

export const TablePagination = (props: TablePaginationProps) => {
	return <StyledTablePagination {...props} />;
};
