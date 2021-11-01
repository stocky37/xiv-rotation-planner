import {Stack} from '@mui/material';
import {SxProps} from '@mui/system';
import type {FC} from 'react';
import type {TimedXIVAction, XIVAction} from 'util/types';

import RotationAction from './components/RotationAction';

const GAP = 0.25;
const style: SxProps = {
	gap: GAP,
	overflowX: 'auto',
};

type Props = {
	actions: TimedXIVAction[];
	onActionClick?: (action: XIVAction, index: number) => void;
};

const Rotation: FC<Props> = ({actions, onActionClick = () => {}}) => (
	<Stack direction="row" sx={style}>
		{actions.map((action, index) => (
			<RotationAction
				key={index}
				action={action}
				onClick={() => {
					onActionClick(action, action.index);
				}}
				gap={GAP}
			/>
		))}
	</Stack>
);

export default Rotation;
