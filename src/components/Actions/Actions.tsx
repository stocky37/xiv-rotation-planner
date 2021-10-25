import {Box} from '@mui/material';
import Action, {DEFAULT_ACTION_SIZE} from 'components/Action';
import type {FC} from 'react';
import type {XIVAction} from 'util/types';

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
