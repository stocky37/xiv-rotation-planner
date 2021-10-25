import {Paper} from '@mui/material';
import Rotation from 'components/Rotation';
import useRotation from 'hooks/useRotation';
import useUpdateRotation from 'hooks/useUpdateRotation';
import type {FC} from 'react';

const JobRotationPanel: FC = () => {
	const rotation = useRotation();
	const [, removeAction] = useUpdateRotation();
	return (
		<Paper elevation={3} sx={{padding: 1, width: '100%', minHeight: 72}}>
			<Rotation actions={rotation} onActionClick={removeAction} />
		</Paper>
	);
};

export default JobRotationPanel;
