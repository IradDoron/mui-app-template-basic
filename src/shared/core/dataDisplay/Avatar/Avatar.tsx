import { StyledAvatar } from 'shared/core/dataDisplay/Avatar/Avatar.styles';
import { AvatarProps } from 'shared/core/dataDisplay/Avatar/Avatar.types';

export const Avatar = (props: AvatarProps) => {
	return <StyledAvatar {...props} />;
};
