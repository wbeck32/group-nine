import React, {useState,useEffect} from 'react'
import {TextField} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'
import dotenv from 'dotenv'


const Search = () =>{
	
	let movieList = []
	const [
		queryString,
		setQueryString
	] = useState('star wars')
	
	useEffect(()=>{
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${queryString}`)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				}
			})
			.then(response => {
				console.debug(response.results);
				movieList = response.results
			// ...
			}).catch(error => {
				console.error(error);
			});
	},[queryString])
	const handleChange = (e,input) =>{
		console.log('e,input:', e,input);


	}
	return(
		<>
			<div>{movieList}</div>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={movieList.map((movie) => movie.results)}
				onChange={(e,input)=>handleChange(e,input)}
				renderInput={(params) => (
					<TextField
						autoComplete="true"
						{...params}
						label="Search input"
						margin="normal"
						variant="outlined"
						value={queryString}
					/>
				)}
			/>
			
		</>	
			
	)
			
			
			
}
		
export default Search
