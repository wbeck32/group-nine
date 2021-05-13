/* eslint-disable no-prototype-builtins */
import React, {useState, useEffect} from 'react'
import Search from './Search'
import MovieList from './MovieList'

const Main = props => {
	console.log('props in main:', props);
	const {movieList, handleChange} = props
	const [
		movies,
		setMovies
	] = useState(movieList)
	
	const [
		query,
		setQuery
	] = useState(null)

	
	// const handleChange = e => {
	// 	setQuery(encodeURI(e.target.value))
	// 	console.log('e.target.value: in Main', e.target.value);
	// 	// console.log('queryString:', query);
	// 	return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
	// 		.then(response => {
	// 			console.log('response:', response);
	// 			if (response.status === 200) {
	// 				return response.json();
	// 			} else {
	// 				throw new Error('Something went wrong on api server!');
	// 			}
	// 		})
	// 		.then(response => {
	// 			setMovieList(response.results)
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 		})
	// }

	const handleOptionLabel = option => {
		if (option.hasOwnProperty('title')) {
			return option.title;
		}
		return "";
	}

	return (
		<>
			<Search movieList={movies} query={query} handleChange={e=>props.handleChange(e)} handleOptionLabel={e=>handleOptionLabel(e)} />
			<MovieList movieList={movies} />
		</>
	)
}

export default Main
