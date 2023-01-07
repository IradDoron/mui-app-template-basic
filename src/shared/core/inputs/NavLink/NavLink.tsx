// types
import { NavLinkProps } from 'shared/core/inputs/NavLink/NavLink.types';

// styles
import {
	StyledNavLink,
	StyledRouterNavLink,
} from 'shared/core/inputs/NavLink/NavLink.styles';

export const NavLink = (props: NavLinkProps) => {
	return (
		<StyledNavLink {...props}>
			<StyledRouterNavLink to={props.to}>{props.children}</StyledRouterNavLink>
		</StyledNavLink>
	);
};
