// types
import { CardHeaderProps } from 'shared/core/surfaces/CardHeader/CardHeader.types';

// styles
import { StyledCardHeader } from 'shared/core/surfaces/CardHeader/CardHeader.styles';

export const CardHeader = (props: CardHeaderProps) => {
	return <StyledCardHeader {...props} />;
};
