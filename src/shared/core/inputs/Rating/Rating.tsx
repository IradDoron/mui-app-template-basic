import { RatingProps } from 'shared/core//inputs/Rating/Rating.types';

import { StyledRating } from 'shared/core/inputs/Rating/Rating.styles';

export const Rating = (props: RatingProps) => {
	return <StyledRating {...props} />;
};
