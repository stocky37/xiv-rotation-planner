import {Stack} from '@mui/material';
import JobRotationPanel from 'pages/RotationPage/components/JobRotationPanel';
import type {FC} from 'react';

import JobActionsPanel from './components/JobActionsPanel';
import JobSelectPanel from './components/JobSelectPanel';

const RotationPage: FC = () => {
	return (
		<Stack sx={{alignItems: 'center', display: 'flex', width: '100%'}}>
			<Stack gap={4} alignItems="center" width={408}>
				<JobSelectPanel />
				<JobActionsPanel />
				<JobRotationPanel />
			</Stack>
		</Stack>
	);
};

export default RotationPage;
