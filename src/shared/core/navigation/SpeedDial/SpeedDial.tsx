// types
import { SpeedDialProps } from 'shared/core/navigation/SpeedDial/SpeedDial.types';

// styles
import { StyledSpeedDial } from 'shared/core/navigation/SpeedDial/SpeedDial.styles';

export const SpeedDial = (props: SpeedDialProps) => {
	return <StyledSpeedDial {...props} />;
};
