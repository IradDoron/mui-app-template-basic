// types
import { CardActionsProps } from 'shared/core/surfaces/CardActions/CardActions.types';

// styles
import { StyledCardActions } from 'shared/core/surfaces/CardActions/CardActions.styles';

export const CardActions = (props: CardActionsProps) => {
	return <StyledCardActions {...props} />;
};
