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
				open={false}
				options={movieList.map((option) => option.title)}
				onInputChange={e=>handleChange(e)}
				renderInput={(params) => (
					<TextField 
						{...params} 
						autoFocus
						label="search movie database" 
						margin="normal" 
						variant="outlined" 
					/>
				)}
			/>
		</div>
	);
}
export default Search
