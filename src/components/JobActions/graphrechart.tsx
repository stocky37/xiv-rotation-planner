import lightFormat from 'date-fns/lightFormat';
import React, {FC} from 'react';
import {CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis} from 'recharts';

// @ts-ignore
const formatTick = (tick) => {
	return lightFormat(tick, 'm:ss.SS');
};

// @ts-ignore
const CustomizedDot = ({cx, cy, payload}) => {
	return (
		<svg x={cx - 20} y={cy - 20} width={40} height={40}>
			<image xlinkHref={`https://xivapi.com${payload.icon}`} height={40} width={40} />;
		</svg>
	);
};

// @ts-ignore
const Graphrechart: FC<Props> = ({data}) => (
	<ResponsiveContainer width="100%" height={300}>
		<ScatterChart>
			<CartesianGrid />
			<YAxis dataKey="type" type="category" allowDuplicatedCategory={false} />
			<XAxis
				type="number"
				dataKey="time"
				domain={[0, 'dataMax']}
				scale={'time'}
				tickFormatter={formatTick}
			/>
			<Scatter data={data} shape={CustomizedDot} />
		</ScatterChart>
	</ResponsiveContainer>
);

export default Graphrechart;
