// types
import { CardMediaProps } from 'shared/core/surfaces/CardMedia/CardMedia.types';

// styles
import { StyledCardMedia } from 'shared/core/surfaces/CardMedia/CardMedia.styles';

export const CardMedia = (props: CardMediaProps) => {
	return <StyledCardMedia {...props} />;
};
