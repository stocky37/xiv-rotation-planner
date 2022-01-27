import {Box} from '@mui/material';
import type {FC, PropsWithChildren} from 'react';
import {ReactNode, useState} from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

type Props = {
	sidebar?: ReactNode;
	sidebarWidth?: number;
};

const Layout: FC<PropsWithChildren<Props>> = ({children, sidebar, sidebarWidth = 300}) => {
	const [open] = useState(true);
	return (
		<>
			<Header />
			<Box sx={{display: 'flex'}}>
				<Sidebar open={open} width={sidebarWidth}>
					{sidebar}
				</Sidebar>
				<Main open={open} sidebarWidth={sidebarWidth}>
					{children}
				</Main>
			</Box>
		</>
	);
};

export default Layout;
