import {CSSObject, Stack} from '@mui/material';
import type {FC} from 'react';
import type {Action, Item, UsedAction} from 'util/types';

import RotationAction from './components/RotationAction';

const style: CSSObject = {
	flexWrap: 'wrap',
	gap: 0.25,
};

type Props = {
	actions: UsedAction[];
	onActionClick?: (action: Action | Item, index: number) => void;
};

const Rotation: FC<Props> = ({actions, onActionClick = () => {}}) => (
	<Stack direction="row" sx={style}>
		{actions.map((action, index) => (
			<RotationAction
				key={index}
				action={action}
				onClick={() => {
					onActionClick(action.action, action.index);
				}}
			/>
		))}
	</Stack>
);

export default Rotation;
