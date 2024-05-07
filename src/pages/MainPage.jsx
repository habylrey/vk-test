import { useState, useEffect } from 'react';
import './../App.css';
import Header from './../components/Header/Header';
import MoviesBlock from './../components/MoviesBlock/MoviesBlock';
import axios from 'axios';
import PaginationComponent from './../components/PaginationComponent/PaginationComponent';
import LoadingComponent from './../components/LoadingComponent/LoadingComponent';
import Footer from './../components/Footer/Footer';
function MainPage() {
	const [data, setData] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		fetchPosts();
	}, [currentPage]);
	async function fetchPosts() {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${
				import.meta.env.VITE_API_KEY
			}&page=${currentPage}`
		);

		setData(response.data['results']);
		setVisible(false);
	}

	return (
		<main>
			<Header className="header" />
			{data ? (
				<div>
					<MoviesBlock response={data} loader={visible} />
					<PaginationComponent
						page={currentPage}
						setPage={setCurrentPage}
					/>
				</div>
			) : (
				<LoadingComponent />
			)}
			<Footer />
		</main>
	);
}

export default MainPage;
