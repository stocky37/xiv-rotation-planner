import lightFormat from 'date-fns/lightFormat';
import React, {FC} from 'react';
import {
	Brush,
	CartesianGrid,
	ResponsiveContainer,
	Scatter,
	ScatterChart,
	XAxis,
	YAxis,
} from 'recharts';

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

const gcd = 2500;
const oGcd = 800;

// @ts-ignore
const Graphrechart: FC<Props> = ({actions}) => {
	let nextGcdTime = 0;
	let nextOGcd = oGcd;
	const chartData = actions.map((x: any) => {
		let point;
		if (x.isGCD) {
			point = {
				icon: x.icon,
				type: 'GCD',
				time: nextGcdTime,
			};
			nextGcdTime += gcd;
			nextOGcd = nextGcdTime + oGcd;
		} else {
			point = {
				icon: x.icon,
				type: 'oGCD',
				time: nextOGcd,
			};
			nextOGcd += oGcd;
		}

		return point;
	});

	return (
		<ResponsiveContainer width="100%" height={300}>
			<ScatterChart>
				<CartesianGrid />
				<YAxis name="Type" dataKey="type" type="category" allowDuplicatedCategory={false} />
				<XAxis
					type="number"
					dataKey="time"
					domain={[0, 'dataMax']}
					scale={'time'}
					tickFormatter={formatTick}
				/>
				<Brush dataKey="time" height={30} width={500} stroke="#8884d8" />
				<Scatter data={chartData} shape={CustomizedDot} />
			</ScatterChart>
		</ResponsiveContainer>
	);
};

export default Graphrechart;
