import {FC, ReactNode} from 'react';
import Header from '../Header';

type Props = {
	children: ReactNode;
};

const PageLayout: FC<Props> = ({children}) => (
	<>
		<Header />
		{children}
		{/*<Container>{children}</Container>*/}
	</>
);

export default PageLayout;
