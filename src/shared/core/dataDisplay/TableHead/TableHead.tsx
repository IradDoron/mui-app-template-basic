// types
import { TableHeadProps } from 'shared/core/dataDisplay/TableHead/TableHead.types';

// styles
import { StyledTableHead } from 'shared/core/dataDisplay/TableHead/TableHead.styles';

export const TableHead = (props: TableHeadProps) => {
	return <StyledTableHead {...props} />;
};
