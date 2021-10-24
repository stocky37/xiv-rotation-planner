import {Box} from '@mui/material';
import type {FC} from 'react';

import type {XIVAction} from '../../util/types';
import Action from '../Action';
import {DEFAULT_ACTION_SIZE} from '../Action';

type Props = {
	actions?: XIVAction[];
	size?: number;
	onClick?: (action: XIVAction) => void;
};

const Actions: FC<Props> = ({actions = [], size = DEFAULT_ACTION_SIZE, onClick = () => {}}) => (
	<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
		{actions.map((action) => (
			<Action
				key={action.id}
				action={action}
				size={size}
				onClick={() => {
					onClick(action);
				}}
			/>
		))}
	</Box>
);

export default Actions;
