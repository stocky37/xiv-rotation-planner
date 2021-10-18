import {FC, ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

type Props = {
	children: ReactNode;
};

const Providers: FC<Props> = ({children}) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default Providers;
