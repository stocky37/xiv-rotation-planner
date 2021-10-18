import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {FC} from 'react';

const Header: FC = () => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
				Test
			</Typography>
		</Toolbar>
	</AppBar>
);

export default Header;
