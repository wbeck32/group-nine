import React from 'react'
import {TextField} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'


const Search = props => {
	let {movieList, handleChange} = props 
	let queryString = ''
	const handleLabel = e =>{
		return e.title
	}
	return(

		<>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={movieList.map((movie) => movie)}
				getOptionLabel={(e)=>handleLabel(e)}
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
