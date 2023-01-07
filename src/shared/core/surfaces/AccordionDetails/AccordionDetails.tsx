// types
import { AccordionDetailsProps } from 'shared/core/surfaces/AccordionDetails/AccordionDetails.types';

// styles
import { StyledAccordionDetails } from 'shared/core/surfaces/AccordionDetails/AccordionDetails.styles';

export const AccordionDetails = (props: AccordionDetailsProps) => {
	return <StyledAccordionDetails {...props} />;
};
