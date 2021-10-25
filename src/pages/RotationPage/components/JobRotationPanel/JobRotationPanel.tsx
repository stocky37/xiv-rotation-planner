import {Clear} from '@mui/icons-material';
import {Card, CardContent, CardHeader, IconButton} from '@mui/material';
import Rotation from 'components/Rotation';
import useRotation from 'hooks/useRotation';
import useUpdateRotation from 'hooks/useUpdateRotation';
import type {FC} from 'react';

const JobRotationPanel: FC = () => {
	const rotation = useRotation();
	const [, removeAction, clearRotation] = useUpdateRotation();
	return (
		<Card sx={{width: '100%'}}>
			<CardHeader
				title={'Rotation'}
				action={
					<IconButton size="small" onClick={clearRotation}>
						<Clear />
					</IconButton>
				}
			/>
			<CardContent>
				<Rotation actions={rotation} onActionClick={removeAction} />
			</CardContent>
		</Card>
	);
};

export default JobRotationPanel;
