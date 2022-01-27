import {Box, Drawer, Toolbar} from '@mui/material';
import {FC, PropsWithChildren} from 'react';

type Props = {
	open: boolean;
	setOpen?: (open: boolean) => void;
	width: number;
};

const Sidebar: FC<PropsWithChildren<Props>> = ({children, open, width}) => (
	<Drawer
		open={open}
		variant="persistent"
		sx={{
			width,
			flexShrink: 0,
			[`& .MuiDrawer-paper`]: {width, boxSizing: 'border-box'},
		}}
	>
		<Toolbar />
		<Box sx={{padding: 2, height: '100%'}}>{children}</Box>
	</Drawer>
);

export default Sidebar;
