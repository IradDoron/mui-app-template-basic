// types
import { AccordionActionsProps } from 'shared/core/surfaces/AccordionActions/AccordionActions.types';

// styles
import { StyledAccordionActions } from 'shared/core/surfaces/AccordionActions/AccordionActions.styles';

export const AccordionActions = (props: AccordionActionsProps) => {
	return <StyledAccordionActions {...props} />;
};
