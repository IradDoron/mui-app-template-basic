// types
import { LinkProps } from 'shared/core/navigation/Link/Link.types';

// styles
import { StyledLink } from 'shared/core/navigation/Link/Link.styles';

export const Link = (props: LinkProps) => {
	return <StyledLink {...props} />;
};
