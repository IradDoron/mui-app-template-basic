// types
import { TabsProps } from 'shared/core/navigation/Tabs/Tabs.types';

// styles
import { StyledTabs } from 'shared/core/navigation/Tabs/Tabs.styles';

export const Tabs = (props: TabsProps) => {
	return <StyledTabs {...props} />;
};
