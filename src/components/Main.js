/* eslint-disable no-prototype-builtins */
import React, {useState, useEffect} from 'react'
import Search from './Search'
import MovieList from './MovieList'

const Main = () => {
	
	const [
		movieList,
		setMovieList
	] = useState([])
	
	const [
		query,
		setQuery
	] = useState()

	
	
	const handleChange = e => {
		console.log('queryString:', query);
		setQuery(e.target.value)
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					console.log('response:', response);
					throw new Error('Something went wrong on api server!');
				}
			})
			.then(response => {
				setMovieList(response.results)
				console.log('movieList:', movieList);
			})
			.catch(error => {
				console.error(error);
			})
	}

	const handleOptionLabel = option => {
		// console.log('option:', option.title);
		if (option.hasOwnProperty('title')) {
			return option.title;
		}
		return "";
	}

	return (
		<>
			<Search movieList={movieList} handleChange={e=>handleChange(e)} handleOptionLabel={e=>handleOptionLabel(e)} />
			{	movieList && <MovieList movieList={movieList} />}
		</>
	)
}

export default Main
