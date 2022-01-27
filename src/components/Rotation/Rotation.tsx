import {CSSObject, Stack} from '@mui/material';
import {SxProps} from '@mui/system';
import type {FC} from 'react';
import type {TimedXIVAction, XIVAction} from 'util/types';

import RotationAction from './components/RotationAction';

const gap = 0.25;
const style: CSSObject = {
	gap,
	flexWrap: 'wrap',
	// overflowX: 'auto',
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
				gap={0}
			/>
		))}
	</Stack>
);

export default Rotation;
