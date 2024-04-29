import classes from './MoviesBlock.module.css';
import MovieItem from '../MovieItem/MovieItem';

export default function MoviesBlock({ response, loader }) {
	return (
		<div className={classes.container}>
			<div className={classes.movieBlock}>
				{response.map((el) => {
					return <MovieItem styles={loader} key={el.id} data={el} />;
				})}
			</div>
		</div>
	);
}
