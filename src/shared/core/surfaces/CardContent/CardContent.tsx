// types
import { CardContentProps } from 'shared/core/surfaces/CardContent/CardContent.types';

// styles
import { StyledCardContent } from 'shared/core/surfaces/CardContent/CardContent.styles';

export const CardContent = (props: CardContentProps) => {
	return <StyledCardContent {...props} />;
};
