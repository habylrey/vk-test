import { useState } from 'react';
import classes from './MovieFullItem.module.css';
export default function MovieFullItem({ data }) {
	const [genreName, setGenreName] = useState('');
	const genre = (num) => {
		setGenreName(data.genres[num].name);
		return genreName;
	};

	console.log(data);
	return (
		<div className={classes.movie}>
			<div className={classes.movie_image__wrap}>
				<a href={data.homepage}>
					<div className={classes.movie_hover}>
						<h3 className={classes.movie_name}>{data.status}</h3>
					</div>

					<img
						src={`https://image.tmdb.org/t/p/w500${data['poster_path']}`}
						alt="Poster"
						className={classes.movie_poster}
					/>
				</a>
			</div>
			<div className={classes.movie_about}>
				<h3 className={classes.movie_name}>{data.title}</h3>
				<div className={classes.movie_info}>
					<p className={classes.movie_info__text}>
						{data['release_date'].toString().substring(0, 4)}
					</p>
					<p className={classes.movie_info__text}>
						{data.adult ? '+18' : '+16'}
					</p>
					<p className={classes.movie_info__text}>
						{(data.runtime / 60).toString().substring(0, 3)} hour
					</p>
				</div>
				<div className={classes.movie_info}>
					<p className={classes.movie_info__text}>
						{data['origin_country']}
					</p>
					<p className={classes.movie_info__text}>
						{data.genres[0].name}
					</p>
					<p className={classes.movie_info__text}>
						{data.genres[1].name ? data.genres[1].name : ''}
					</p>
				</div>
				<p className={classes.movie_overview}>{data.overview}</p>
				<div className={classes.movie_rating}>
					<div className={classes.movie_rating__box}>
						<span className={classes.movie_rating__box_text}>
							{data.vote_average.toString().substring(0, 3)}
						</span>
					</div>
					{/* <h3 className={classes.movie_name}>бля</h3> */}
				</div>
			</div>
		</div>
	);
}
