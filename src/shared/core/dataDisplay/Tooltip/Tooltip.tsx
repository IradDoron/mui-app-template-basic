// types
import { TooltipProps } from 'shared/core/dataDisplay/Tooltip/Tooltip.types';

// styles
import { StyledTooltip } from 'shared/core/dataDisplay/Tooltip/Tooltip.styles';

export const Tooltip = (props: TooltipProps) => {
	return <StyledTooltip {...props} />;
};
