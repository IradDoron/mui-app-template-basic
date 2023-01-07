// types
import { BadgeProps } from 'shared/core/dataDisplay/Badge/Badge.types';

// styles
import { StyledBadge } from 'shared/core/dataDisplay/Badge/Badge.styles';

export const Badge = (props: BadgeProps) => {
	return <StyledBadge {...props} />;
};
