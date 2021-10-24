import {AppBar, Toolbar, Typography} from '@mui/material';
import type {FC} from 'react';

const Header: FC = () => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
				XIV Tools
			</Typography>
		</Toolbar>
	</AppBar>
);

export default Header;
