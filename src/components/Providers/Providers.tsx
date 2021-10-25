import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import type {FC, PropsWithChildren} from 'react';
import {QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import queryClient from 'util/queryClient';
import theme from 'util/theme';

const Providers: FC<PropsWithChildren<unknown>> = ({children}) => (
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
