// types
import { MainProps } from 'shared/core/layout/Main/Main.types';

// styles
import { StyledMain } from 'shared/core/layout/Main/Main.styles';

export const Main = (props: MainProps) => {
	return <StyledMain {...props} component="main" />;
};
