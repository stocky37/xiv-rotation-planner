import {FC, ReactNode} from 'react';
import Body from '../Body';
import Header from '../Header';

type Props = {
	children: ReactNode;
};

const PageLayout: FC<Props> = ({children}) => (
	<>
		<Header />
		<Body>{children}</Body>
	</>
);

export default PageLayout;
