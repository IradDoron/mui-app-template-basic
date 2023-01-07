// types
import { GridProps } from 'shared/core/layout/Grid/Grid.types';

// styles
import { StyledGrid } from 'shared/core/layout/Grid/Grid.styles';

export const Grid = (props: GridProps) => {
	return <StyledGrid {...props} />;
};
