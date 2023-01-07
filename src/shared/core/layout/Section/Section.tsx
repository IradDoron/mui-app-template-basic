// types
import { SectionProps } from 'shared/core/layout/Section/Section.types';

// styles
import { StyledSection } from 'shared/core/layout/Section/Section.styles';

export const Section = (props: SectionProps) => {
	return <StyledSection {...props} component="section" />;
};
