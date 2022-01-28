import {Box, CSSObject} from '@mui/material';
import type {FC, PropsWithChildren} from 'react';

type Props = {
	sx?: CSSObject;
};

const ActionIcons: FC<PropsWithChildren<Props>> = ({children, sx = {}}) => (
	<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.25, ...sx}}>{children}</Box>
);

export default ActionIcons;
