// types
import { TableProps } from 'shared/core/dataDisplay/Table/Table.types';

// styles
import { StyledTable } from 'shared/core/dataDisplay/Table/Table.styles';

export const Table = (props: TableProps) => {
	return <StyledTable {...props} />;
};
