import React, {useState} from 'react'
import {TextField} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'

const Search = props => {
	console.log('props in search:', props);
	let {movieList, handleChange} = props 
	let queryString = ''

	const handleOptionLabel = option => {
		console.log('option:', option);
		// eslint-disable-next-line no-prototype-builtins
		if (option.hasOwnProperty('title')) {
			return option.title;
		}
		return "";
	}


	return(
		<>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={movieList}
				getOptionLabel={e=>handleOptionLabel(e)}
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
