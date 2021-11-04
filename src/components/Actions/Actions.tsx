import {Box} from '@mui/material';
import {SxProps} from '@mui/system';
import Action from 'components/Action';
import {ActionSize} from 'components/Action/Action';
import type {FC} from 'react';
import type {XIVAction} from 'util/types';

type Props = {
	actions?: XIVAction[];
	onClick?: (action: XIVAction) => void;
	sx?: SxProps;
	size?: ActionSize;
};

const Actions: FC<Props> = ({actions = [], onClick = () => {}, size, sx = {}}) => (
	<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5, ...sx}}>
		{actions.map((action) => (
			<Action
				key={action.id}
				size={size}
				action={action}
				onClick={() => {
					onClick(action);
				}}
			/>
		))}
	</Box>
);

export default Actions;
