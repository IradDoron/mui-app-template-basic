// types
import { TableRowProps } from 'shared/core/dataDisplay/TableRow/TableRow.types';

// styles
import { StyledTableRow } from 'shared/core/dataDisplay/TableRow/TableRow.styles';

export const TableRow = (props: TableRowProps) => {
	return <StyledTableRow {...props} />;
};
