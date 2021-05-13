import React,{useState} from 'react'
import {TextField} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'

const Search = props => {
	console.log('props in search:', props);
	let {movieList, handleOptionLabel, handleChange,query} = props 

	const [
		queryString,
		setQueryString
	] = useState(query)

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
						autoFocus
						{...params}
						label="Search input"
						margin="normal"
						onChange={e=>handleChange(e)}
						variant="outlined"
						value={e=>setQueryString(query)}
						InputProps={{ ...params.InputProps,type: 'search' }}
					/>
				)}
			/>
		</>	
			
	)
			
			
			
}
		
export default Search
