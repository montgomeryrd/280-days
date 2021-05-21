import { useState, useEffect } from 'react';
import { Home, Registration } from './pages/index';

function App() {
	const initialState = () => JSON.parse(window.localStorage.getItem('280-days-data')) || [];
	const [data, setData] = useState(initialState);
	const [date, setDate] = useState(new Date());

	useEffect(() => {
			window.localStorage.setItem('280-days-data', JSON.stringify(data));
		}, [data]);

	return (
		<div className="App">
			{ data ? <Home data={data} /> :	<Registration setData={setData} /> }
		</div>
	);
}

export default App;