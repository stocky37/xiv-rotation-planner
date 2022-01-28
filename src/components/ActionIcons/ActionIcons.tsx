import {Stack} from '@mui/material';
import {SxProps} from '@mui/system';
import type {FC, PropsWithChildren} from 'react';

type Props = {
	sx?: SxProps;
};

const ActionIcons: FC<PropsWithChildren<Props>> = ({children, sx = {}}) => (
	<Stack direction="row" spacing={0.25} sx={{flexWrap: 'wrap', ...sx}}>
		{children}
	</Stack>
);

export default ActionIcons;
