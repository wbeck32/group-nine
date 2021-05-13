import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = props => {
	const {movieList,handleChange} = props

	return (
		<div style={{ width: 300 }}>
			<Autocomplete
				id="free-solo-demo"
				freeSolo
				options={movieList.map((option) => option.title)}
				renderInput={(params) => (
					<TextField 
						{...params} 
						label="freeSolo" 
						margin="normal" 
						variant="outlined" 
						onChange={e=>handleChange(e)}
					/>
				)}
			/>
		</div>
	);
}
export default Search
