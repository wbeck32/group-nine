import './App.css';
import Search from './components/Search'
require('dotenv').config()

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Search queryString="a"/>
			</header>
		</div>
	);
}

export default App;
