// import axios from 'axios';
// export default class DataService {
// 	static async getAll() {
// 		const options = {
// 			method: 'GET',
// 			url: `https://api.themoviedb.org/3/movie/popular?api_key=${
// 				import.meta.env.VITE_API_KEY
// 			}`,
// 			params: { language: 'en-US', page: '10' },
// 			headers: {
// 				accept: 'application/json',
// 				Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
// 			},
// 		};
// 		axios
// 			.request(options)
// 			.then(function (response) {
// 				console.log(response);
// 			})
// 			.catch(function (error) {
// 				console.error(error);
// 			});
// 		return response;
// 	}
// }
