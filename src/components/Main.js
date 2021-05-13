/* eslint-disable no-prototype-builtins */
import React, {useState} from 'react'
import Search from './Search'
import MovieList from './MovieList'

const Main = () => {

	const [
		movieList,
		setMovieList
	] = useState([])
	
	const handleChange = e => {
		console.log('e.target.value: in Main', e.target.value);
		let query = e.target.value
		encodeURI(query)
		// console.log('queryString:', query);
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query="${query}"`)
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

	const handleOptionLabel = option => {
		if (option.hasOwnProperty('title')) {
			return option.title;
		}
		return "";
	}

	return (
		<>
			<Search movieList={movieList} handleOptionLabel={e=>handleOptionLabel(e)} handleChange={e=>handleChange(e)}/>
			<MovieList movieList={movieList} />
		</>
	)
}

export default Main
