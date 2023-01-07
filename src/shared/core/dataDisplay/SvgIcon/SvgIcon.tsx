// types
import { SvgIconProps } from 'shared/core/dataDisplay/SvgIcon/SvgIcon.types';

// styles
import { StyledSvgIcon } from 'shared/core/dataDisplay/SvgIcon/SvgIcon.styles';

export const SvgIcon = (props: SvgIconProps) => {
	return <StyledSvgIcon {...props} />;
};
