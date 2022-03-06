import {Clear} from '@mui/icons-material';
import {Card, CardContent, CardHeader, IconButton} from '@mui/material';
import type {Rotation} from 'api/types';
import ActionIcons from 'components/ActionIcons';
import RotationActionIcon from 'components/RotationActionIcon';
import useRotation from 'hooks/useRotation';
import useUpdateRotation from 'hooks/useUpdateRotation';
import type {FC} from 'react';
import {useEffect, useState} from 'react';

const JobRotationPanel: FC = () => {
	const {data: rotation, isLoading} = useRotation();

	// keeps the previous rotation displayed while the next request is loading
	const [prev, setPrev] = useState<Rotation>({actions: []});
	useEffect(() => {
		if (!isLoading && rotation) {
			setPrev(rotation);
		}
	}, [isLoading, rotation]);

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
				<ActionIcons sx={{gap: 0}}>
					{(isLoading ? prev : rotation)?.actions.map((action, index) => (
						<RotationActionIcon
							key={index}
							action={action}
							onClick={() => {
								removeAction(index);
							}}
						/>
					))}
				</ActionIcons>
			</CardContent>
		</Card>
	);
};

export default JobRotationPanel;
