import { StyledBadge } from 'shared/core/dataDisplay/Badge/Badge.styles';
import { BadgeProps } from 'shared/core/dataDisplay/Badge/Badge.types';

export const Badge = (props: BadgeProps) => {
	return <StyledBadge {...props} />;
};
