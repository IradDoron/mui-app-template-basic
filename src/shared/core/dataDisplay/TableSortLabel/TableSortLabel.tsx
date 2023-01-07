// types
import { TableSortLabelProps } from 'shared/core/dataDisplay/TableSortLabel/TableSortLabel.types';

// styles
import { StyledTableSortLabel } from 'shared/core/dataDisplay/TableSortLabel/TableSortLabel.styles';

export const TableSortLabel = (props: TableSortLabelProps) => {
	return <StyledTableSortLabel {...props} />;
};
