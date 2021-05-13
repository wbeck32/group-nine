import React, {useState} from 'react'
import './App.css';
import Main from './components/Main'
require('dotenv').config()

function App() {
	const [
		movieList,
		setMovieList
	] = useState([])

	const [
		query,
		setQuery
	] = useState()


	const handleChange = e => {
		setQuery(encodeURI(e.target.value))
		console.log('e in App.js', e);
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				}
			})
			.then(response => {
				setMovieList(response.results)
			})
			.catch(error => {
				console.error(error);
			})
	}



	return (
		<div className="App">
			<Main handleChange={e=>handleChange(e)} inputValue="d"/>
		</div>
	);
}

export default App;
