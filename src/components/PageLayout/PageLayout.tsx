import {Box} from '@mui/material';
import Header from 'components/Header';
import type {FC, ReactNode} from 'react';

type Props = {
	children: ReactNode;
};

const PageLayout: FC<Props> = ({children}) => (
	<>
		<Header />
		<Box sx={{paddingTop: 4}}>{children}</Box>
	</>
);

export default PageLayout;
