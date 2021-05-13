import React from 'react'
import {Card} from '@material-ui/core'

const MovieList = props => {
	// console.log('props in movie list:', props);
	const {movieList} = props
	
	return (
		<div>
		
			{movieList &&
			movieList.map(i=>{
				return <Card key={i.id}>{i.title}</Card>
			})
			}
		</div>
		
		
	)
		
}
	
export default MovieList
