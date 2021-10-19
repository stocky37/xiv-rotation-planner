import {Box, ImageList, ImageListItem} from '@mui/material';
import React, {FC} from 'react';
import {XIVAction} from '../../util/types';
import Action from '../Action';

type Props = {
	actions: XIVAction[];
	cols?: number;
	gap?: number;
};

const ActionGrid: FC<Props> = ({actions, cols = 5, gap = 4}) => (
	<Box width={cols * 40 + cols * gap}>
		<ImageList cols={cols} gap={gap}>
			{actions.map((action: any) => (
				<ImageListItem key={action.id}>
					<Action action={action} />
				</ImageListItem>
			))}
		</ImageList>
	</Box>
);

export default ActionGrid;
