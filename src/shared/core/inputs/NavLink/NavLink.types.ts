import { Button } from '@mui/material';

export interface NavLinkProps extends React.ComponentProps<typeof Button> {
	to: string;
}
