import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import type {FC, PropsWithChildren} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import queryClient from 'util/queryClient';
import theme from 'util/theme';

const Providers: FC<PropsWithChildren<unknown>> = ({children}) => (
	<RecoilRoot>
		<QueryClientProvider client={queryClient}>
			<DndProvider backend={HTML5Backend}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</DndProvider>
		</QueryClientProvider>
	</RecoilRoot>
);

export default Providers;
