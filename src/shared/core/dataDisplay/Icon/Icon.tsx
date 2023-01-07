// types
import { IconProps } from 'shared/core/dataDisplay/Icon/Icon.types';

// styles
import { StyledIcon } from 'shared/core/dataDisplay/Icon/Icon.styles';

export const Icon = (props: IconProps) => {
	return <StyledIcon {...props} />;
};
