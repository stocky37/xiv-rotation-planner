import React from 'react';
import {useQuery} from 'react-query';
import PageLayout from '../PageLayout';

function App() {
	const {isLoading, data} = useQuery('sam', () =>
		fetch('http://localhost:8080/jobs/34').then((res) => res.json())
	);

	if (isLoading) {
		console.log('Still loading...');
		return null;
	}

	console.log(data);

	return (
		<PageLayout>
			<ul>
				{data.actions.map((action: any) => (
					<li>
						<img src={`https://xivapi.com/${action.icon}`} />
						{action.name}
					</li>
				))}
			</ul>
		</PageLayout>
	);
}

export default App;
