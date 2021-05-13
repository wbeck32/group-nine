/* eslint-disable no-prototype-builtins */
import React, {useState} from 'react'
import Search from './Search'
import MovieList from './MovieList'

const Main = props => {
	console.log('props in main:', props);
	const [
		movieList,
		setMovieList
	] = useState([{}])
	const [
		queryString,
		setQueryString
	] = useState("enter some text")
	
	

	const handleChange = e => {
		console.log('queryString in main:', queryString);
		setQueryString(e.target.value)
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${queryString}`)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
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
		;}

	return (
		<>
			<Search movieList={movieList} handleChange={(e)=>handleChange(e)}/>
			{	movieList && <MovieList movieList={movieList} />}
		</>
	)
}

export default Main
