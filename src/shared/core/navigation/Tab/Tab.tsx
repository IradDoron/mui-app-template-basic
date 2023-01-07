// types
import { TabProps } from 'shared/core/navigation/Tab/Tab.types';

// styles
import { StyledTab } from 'shared/core/navigation/Tab/Tab.styles';

export const Tab = (props: TabProps) => {
	return <StyledTab {...props} />;
};
