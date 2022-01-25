import {Box} from '@mui/material';
import {SxProps} from '@mui/system';
import Action from 'components/Action';
import type {FC} from 'react';
import type {XIVAction} from 'util/types';

type Props = {
	actions?: XIVAction[];
	onClick?: (action: XIVAction) => void;
	sx?: SxProps;
};

const Actions: FC<Props> = ({actions = [], onClick = () => {}, sx = {}}) => (
	<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.25, ...sx}}>
		{actions.map((action) => (
			<Action
				key={action.id}
				action={action}
				onClick={() => {
					onClick(action);
				}}
			/>
		))}
	</Box>
);

export default Actions;
