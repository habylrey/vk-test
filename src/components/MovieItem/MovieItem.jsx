import classes from './MovieItem.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MovieItem({ data, styles }) {
	// console.log(data, 'data');
	return (
		<Link to={`/movie/${data.id}`}>
			<motion.div
				className={classes.movieItem}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<div
					className={
						styles ? classes.loading : classes.movieItem_image__wrap
					}
				>
					<div className={classes.movieItem_hover}>
						<p className={classes.movieItem_text}>
							{data.adult ? '+18' : '+16'}
						</p>
						<h3 className={classes.movieItem_name}>
							{data['vote_average'].toString().substring(0, 3)}
						</h3>
					</div>
					<img
						className={classes.movieItem_image}
						src={`https://image.tmdb.org/t/p/w500${data['poster_path']}`}
						alt="Poster"
					/>
				</div>
				<h3 className={classes.movieItem_name}>
					{data['title'].length <= 11
						? data['title']
						: data['title'].toString().substring(0, 13) + '...'}
				</h3>
				<p className={classes.movieItem_text}>
					{data['release_date'].toString().substring(0, 4)}
				</p>
			</motion.div>
		</Link>
	);
}
