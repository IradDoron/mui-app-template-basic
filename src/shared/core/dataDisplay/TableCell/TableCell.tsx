// types
import { TableCellProps } from 'shared/core/dataDisplay/TableCell/TableCell.types';

// styles
import { StyledTableCell } from 'shared/core/dataDisplay/TableCell/TableCell.styles';

export const TableCell = (props: TableCellProps) => {
	return <StyledTableCell {...props} />;
};
