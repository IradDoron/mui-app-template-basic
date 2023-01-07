// types
import { AccordionSummaryProps } from 'shared/core/surfaces/AccordionSummary/AccordionSummary.types';

// styles
import { StyledAccordionSummary } from 'shared/core/surfaces/AccordionSummary/AccordionSummary.styles';

export const AccordionSummary = (props: AccordionSummaryProps) => {
	return <StyledAccordionSummary {...props} />;
};
