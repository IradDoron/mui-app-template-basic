// types
import { TableContainerProps } from 'shared/core/dataDisplay/TableContainer/TableContainer.types';

// styles
import { StyledTableContainer } from 'shared/core/dataDisplay/TableContainer/TableContainer.styles';

export const TableContainer = (props: TableContainerProps) => {
	return <StyledTableContainer {...props} />;
};
