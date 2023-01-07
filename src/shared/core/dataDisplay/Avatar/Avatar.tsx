// types
import { AvatarProps } from 'shared/core/dataDisplay/Avatar/Avatar.types';

// styles
import { StyledAvatar } from 'shared/core/dataDisplay/Avatar/Avatar.styles';

export const Avatar = (props: AvatarProps) => {
	return <StyledAvatar {...props} />;
};
