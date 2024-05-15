import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './../styles/MoviePage.css';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';
import MovieFullItem from '../components/MovieFullItem/MovieFullItem';

export default function MoviePage() {
	const { id } = useParams();
	const [movieData, setMovieData] = useState('');
	useEffect(() => {
		getMovie();
	}, []);
	async function getMovie() {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${
				import.meta.env.VITE_API_KEY
			}`
		);
		setMovieData(response.data);
	}

	return (
		<>
			<Header />
			{movieData ? (
				<MovieFullItem data={movieData} />
			) : (
				<LoadingComponent />
			)}
			<Footer />
		</>
	);
}
