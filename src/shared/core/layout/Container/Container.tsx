// types
import { ContainerProps } from 'shared/core/layout/Container/Container.types';

// styles
import { StyledContainer } from 'shared/core/layout/Container/Container.styles';

export const Container = (props: ContainerProps) => {
	return <StyledContainer {...props} />;
};
