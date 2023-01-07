// types
import { FooterProps } from 'shared/core/layout/Footer/Footer.types';

// styles
import { StyledFooter } from 'shared/core/layout/Footer/Footer.styles';

export const Footer = (props: FooterProps) => {
	return <StyledFooter {...props} component="footer" />;
};
