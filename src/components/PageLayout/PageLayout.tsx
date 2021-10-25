import {Container} from '@mui/material';
import Header from 'components/Header';
import type {FC, ReactNode} from 'react';

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
