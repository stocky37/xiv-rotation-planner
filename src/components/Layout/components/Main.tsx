import {Box, Toolbar} from '@mui/material';
import {FC, PropsWithChildren} from 'react';

type Props = {
	open: boolean;
	sidebarWidth: number;
};

const Main: FC<PropsWithChildren<Props>> = ({children}) => (
	<Box component="main" sx={{flexGrow: 1, overflow: 'auto'}}>
		<Toolbar />
		{children}
	</Box>
);

export default Main;
