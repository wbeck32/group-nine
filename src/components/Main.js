import React, {useState} from 'react'
import Search from './Search'
import MovieList from './MovieList'

const Main = props => {
	const [
		movieList,
		setMovieList
	] = useState([])
	const handleChange = e =>{
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
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
			}).catch(error => {
				console.error(error);
			});
	}
	const handleListChange=movieList=>{
		console.log('movieList in handleListChange:', movieList);
	}

	const getItemSelected=e=>{
		console.log('e:', e);


	}

	return (
		<>
			<Search movieList={movieList} handleChange={(e)=>handleChange(e)}/>
			<MovieList movieList={movieList} onClick={e=>getItemSelected(e)} handleListChange={(e)=>handleListChange(e)}/>
		</>
	)
}

export default Main
