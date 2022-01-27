import {AppBar, Toolbar, Typography} from '@mui/material';
import type {FC} from 'react';

const Header: FC = () => (
	<AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
		<Toolbar>
			<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
				XIV Tools
			</Typography>
		</Toolbar>
	</AppBar>
);

export default Header;
