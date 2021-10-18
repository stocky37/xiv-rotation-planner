import {FC, ReactNode} from 'react';

type Props = {
	children: ReactNode;
};

const Body: FC<Props> = ({children}) => <>{children}</>;

export default Body;
