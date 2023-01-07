// types
import { BreadcrumbsProps } from 'shared/core/navigation/Breadcrumbs/Breadcrumbs.types';

// styles
import { StyledBreadcrumbs } from 'shared/core/navigation/Breadcrumbs/Breadcrumbs.styles';

export const Breadcrumbs = (props: BreadcrumbsProps) => {
	return <StyledBreadcrumbs {...props} />;
};
