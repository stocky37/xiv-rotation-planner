import {Box} from '@mui/material';
import Header from 'components/Header';
import type {FC, PropsWithChildren} from 'react';

const PageLayout: FC<PropsWithChildren<unknown>> = ({children}) => (
	<>
		<Header />
		<Box sx={{paddingTop: 4}}>{children}</Box>
	</>
);

export default PageLayout;
