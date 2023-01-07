// types
import { SpeedDialActionProps } from 'shared/core/navigation/SpeedDialAction/SpeedDialAction.types';

// styles
import { StyledSpeedDialAction } from 'shared/core/navigation/SpeedDialAction/SpeedDialAction.styles';

export const SpeedDialAction = (props: SpeedDialActionProps) => {
	return <StyledSpeedDialAction {...props} />;
};
