import React, {useState,useEffect} from 'react'
import {TextField} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'


const Search = props => {

	let movieList = []
	let queryString = ''
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
				movieList = response.results
			}).catch(error => {
				console.error(error);
			});
	}
	return(
		<>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={movieList.map((movie) => movie.title)}
				renderInput={(params) => (
					<TextField
						autoComplete="true"
						{...params}
						label="Search input"
						margin="normal"
						variant="outlined"
						value={queryString}
						onChange={e=>handleChange(e)}
						InputProps={{ ...params.InputProps, type: 'search' }}
					/>
				)}
			/>
			
		</>	
			
	)
			
			
			
}
		
export default Search
