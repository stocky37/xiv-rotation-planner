import {Container} from '@mui/material';
import JobSidebar from 'components/JobSidebar';
import Layout from 'components/Layout';
import type {FC} from 'react';

import JobRotationPanel from './components/JobRotationPanel';

const RotationPage: FC = () => {
	return (
		<Layout sidebar={<JobSidebar />} sidebarWidth={272}>
			<Container maxWidth={false} sx={{padding: 4}}>
				<JobRotationPanel />
			</Container>
		</Layout>
	);
};

export default RotationPage;
