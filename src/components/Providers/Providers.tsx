import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import type {FC, ReactNode} from 'react';
import {QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';

import queryClient from '../../util/queryClient';
import theme from '../../util/theme';

type Props = {
	children: ReactNode;
};

const Providers: FC<Props> = ({children}) => (
	<RecoilRoot>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	</RecoilRoot>
);

export default Providers;
