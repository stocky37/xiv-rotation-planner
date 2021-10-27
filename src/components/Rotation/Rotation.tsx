import {Stack} from '@mui/material';
import Action, {DEFAULT_ACTION_SIZE} from 'components/Action';
import type {FC, ReactElement} from 'react';
import {Fragment} from 'react';
import type {TimelineXIVAction} from 'util/types';

import RotationAction from './components/RotationAction';

type Props = {
	actions: TimelineXIVAction[];
	size?: number;
	oGcdOffset?: number | string;
	oGcdRatio?: number;
	onActionClick?: (action: TimelineXIVAction, index: number) => void;
};

const Rotation: FC<Props> = ({
	actions,
	size = DEFAULT_ACTION_SIZE,
	oGcdRatio = 0.75,
	onActionClick = () => {},
}) => {
	const ogcdSize = size * oGcdRatio;

	let gcdCount = 0;
	const icons: ReactElement[] = actions.map((action, index) => {
		if (action.onGCD) {
			gcdCount += 1;
		}
		const icon = (
			<RotationAction
				label={gcdCount.toString()}
				key={index}
				action={action}
				size={action.onGCD ? size : ogcdSize}
				duration={250}
				onClick={() => {
					onActionClick(action, index);
				}}
			/>
		);

		const spacers = [];
		// if current and previous action were both gcds, add two ogcd spacers
		if (action.onGCD && actions[index - 1]?.onGCD) {
			spacers.push(<Action variant="hidden" size={ogcdSize} />);
			spacers.push(<Action variant="hidden" size={ogcdSize} />);

			// if current is ogcd and is surrounded by gcds, add a single ogcd spacer
		} else if (!action.onGCD && actions[index - 1]?.onGCD && actions[index + 1]?.onGCD) {
			spacers.push(<Action variant="hidden" size={ogcdSize} />);
		}
		return (
			<Fragment key={index}>
				{spacers}
				{icon}
			</Fragment>
		);
	});

	return (
		<Stack direction="row" gap={0.25} sx={{overflowX: 'auto'}}>
			{icons}
		</Stack>
	);
};

export default Rotation;
