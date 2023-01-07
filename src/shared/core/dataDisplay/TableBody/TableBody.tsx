// types
import { TableBodyProps } from 'shared/core/dataDisplay/TableBody/TableBody.types';

// styles
import { StyledTableBody } from 'shared/core/dataDisplay/TableBody/TableBody.styles';

export const TableBody = (props: TableBodyProps) => {
	return <StyledTableBody {...props} />;
};
