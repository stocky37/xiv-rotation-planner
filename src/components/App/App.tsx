import React from 'react';
import {useQuery} from 'react-query';
import './App.css';

function App() {
	const {isLoading, error, data} = useQuery('sam', () =>
		fetch('http://localhost:8080/jobs/34').then((res) => res.json())
	);

	if (isLoading) {
		console.log('Still loading...');
		return null;
	}

	console.log(data);

	return (
		<div className="App">
			<header className="App-header">
				<ul>
					{data.actions.map((action: any) => (
						<li>
							<img src={`https://xivapi.com/${action.icon}`} />
							{action.name}
						</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
