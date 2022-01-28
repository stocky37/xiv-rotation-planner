import {Clear} from '@mui/icons-material';
import {Card, CardContent, CardHeader, IconButton} from '@mui/material';
import ActionIcons from 'components/ActionIcons';
import RotationAction from 'components/RotationAction/RotationAction';
import useRotation from 'hooks/useRotation';
import useUpdateRotation from 'hooks/useUpdateRotation';
import type {FC} from 'react';

const JobRotationPanel: FC = () => {
	const rotation = useRotation();
	const [, removeAction, clearRotation] = useUpdateRotation();
	return (
		<Card sx={{width: '100%'}}>
			<CardHeader
				title="Rotation"
				action={
					<IconButton size="small" onClick={clearRotation}>
						<Clear />
					</IconButton>
				}
			/>
			<CardContent>
				<ActionIcons>
					{rotation.map((action, index) => (
						<RotationAction
							key={index}
							action={action}
							onClick={() => {
								removeAction(action.action, action.index);
							}}
						/>
					))}
				</ActionIcons>
			</CardContent>
		</Card>
	);
};

export default JobRotationPanel;
