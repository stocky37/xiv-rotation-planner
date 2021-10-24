import {Container} from '@mui/material';
import type {FC, ReactNode} from 'react';

import Header from '../Header';

type Props = {
	children: ReactNode;
};

const PageLayout: FC<Props> = ({children}) => (
	<>
		<Header />
		<Container sx={{paddingTop: 4}}>{children}</Container>
	</>
);

export default PageLayout;
