// types
import { CardProps } from 'shared/core/surfaces/Card/Card.types';

// styles
import { StyledCard } from 'shared/core/surfaces/Card/Card.styles';

export const Card = (props: CardProps) => {
	return <StyledCard {...props} />;
};
