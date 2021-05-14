/* eslint-disable no-prototype-builtins */
import React, { useState } from 'react'
import Search from './Search'
import MovieList from './MovieList'

const Main = () => {

	const [
		movieList,
		setMovieList
	] = useState([])

	const [
		numPages,
		setNumPages
	] = useState(0)


	let currentPage = 1

	const handleChange = e => {
		if (e.target.value.length > 0) {
			// currentPage < numPages ? currentPage = currentPage + 1 : currentPage
			let query = e.target.value
			encodeURI(query)
			return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}&include_adult=false&query=${query}`)
				.then(response => {
					if (response.status === 200) {
						return response.json();
					} else {
						throw new Error('Something went wrong on api server!');
					}
				})
				.then(response => {
					setNumPages(response.total_pages)
					setMovieList(response.results)
					movieList.filter(m => {
						m.title.indexOf(query) > -1
						movieList.concat(m)
					})

				})
				.catch(error => {
					console.error(error);
				})
		}
	}

	const handleOptionLabel = option => {
		if (option.hasOwnProperty('title')) {
			return option.title;
		}
		return "";
	}

	return (
		<>
			<Search movieList={movieList} handleOptionLabel={e => handleOptionLabel(e)} handleChange={e => handleChange(e)} />
			<MovieList movieList={movieList} currentPage={currentPage} numPages={numPages} />
		</>
	)
}

export default Main
