import React from 'react'
import {Card} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
	console.log('props in movie list:', props);
	const {movieList, numPages} = props
	
	return (
		<div>
			<InfiniteScroll
				dataLength={movieList.length}
				hasMore={numPages> 0 ? true:false}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{movieList &&
			movieList.map(i=>{
				return <Card key={i.id * Math.random()}>{i.title}</Card>
			})
				}
			</InfiniteScroll>
		</div>	
	)		
}
	
export default MovieList
