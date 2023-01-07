// types
import { AccordionProps } from 'shared/core/surfaces/Accordion/Accordion.types';

// styles
import { StyledAccordion } from 'shared/core/surfaces/Accordion/Accordion.styles';

export const Accordion = (props: AccordionProps) => {
	return <StyledAccordion {...props} />;
};
