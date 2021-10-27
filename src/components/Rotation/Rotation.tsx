import {Stack} from '@mui/material';
import type {SxProps} from '@mui/system';
import Action, {DEFAULT_ACTION_SIZE} from 'components/Action';
import type {FC, ReactElement} from 'react';
import {Fragment} from 'react';
import type {TimelineXIVAction} from 'util/types';

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
	const gcdStyle: SxProps = {
		marginBottom: 2,
		marginTop: 1,
	};

	const icons: ReactElement[] = actions.map((action, index) => {
		const icon = (
			<Action
				key={index}
				action={action}
				sx={action.onGCD ? gcdStyle : {}}
				size={action.onGCD ? size : ogcdSize}
				duration={250}
				onClick={() => {
					onActionClick(action, index);
				}}
			/>
		);

		const spacers = [];
		if (action.gcdType === 'gcd' && actions[index - 1]?.gcdType === 'gcd') {
			spacers.push(<Action variant="hidden" size={ogcdSize} />);
			spacers.push(<Action variant="hidden" size={ogcdSize} />);
		} else if (
			action.gcdType === 'ogcd' &&
			actions[index - 1]?.gcdType === 'gcd' &&
			actions[index - 1]?.gcdType === 'gcd'
		) {
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
