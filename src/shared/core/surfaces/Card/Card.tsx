import { StyledCard } from 'shared/core/surfaces/Card/Card.styles';
import { CardProps } from 'shared/core/surfaces/Card/Card.types';

export const Card = (props: CardProps) => {
	return <StyledCard {...props} />;
};
