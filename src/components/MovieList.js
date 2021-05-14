import React, {useState} from 'react'
import {Card} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
	console.log('props in movie list:', props);
	const {movieList,numPages} = props
	
	const [
		hasMore,
		setHasMore
	] = useState(false)

	const handleNext = e => {
		console.log('e:', e);


	}
	return (
		<div>
			<InfiniteScroll
				dataLength={movieList.length}
				next={e=>handleNext(e)}
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
