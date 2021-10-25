import {Container, Stack} from '@mui/material';
import JobRotationPanel from 'pages/RotationPage/components/JobRotationPanel';
import type {FC} from 'react';

import JobActionsPanel from './components/JobActionsPanel';
import JobSelectPanel from './components/JobSelectPanel';

const RotationPage: FC = () => {
	return (
		<Container>
			<Stack gap={4} alignItems="center">
				<JobSelectPanel />
				<JobRotationPanel />
				<JobActionsPanel />
			</Stack>
		</Container>
	);
};

export default RotationPage;
