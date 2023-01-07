// types
import { TypographyProps } from 'shared/core/dataDisplay/Typography/Typography.types';

// styles
import { StyledTypography } from 'shared/core/dataDisplay/Typography/Typography.styles';

export const Typography = (props: TypographyProps) => {
	return <StyledTypography {...props} />;
};
