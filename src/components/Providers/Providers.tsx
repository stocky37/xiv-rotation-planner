import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FC, ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

type Props = {
	children: ReactNode;
};

const Providers: FC<Props> = ({children}) => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	</QueryClientProvider>
);

export default Providers;
