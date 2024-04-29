import LeftArrow from '../../assets/icons/LeftArrow';
import RightArrow from '../../assets/icons/RightArrow';
import classes from './PaginationComponent.module.css';
import { useState } from 'react';
const PaginationComponent = ({ page, setPage }) => {
	const [disable, setDisable] = useState('disable');
	const nextPage = () => {
		setPage(page + 1);
	};
	const prevPage = () => {
		setPage(page - 1);
	};
	return (
		<div className={classes.container}>
			<span
				onClick={() => setPage(1)}
				className={
					page <= 1 ? classes.disable : classes.pagination_text
				}
			>
				First
			</span>
			<LeftArrow
				className={classes.pagination_arrows}
				prevPage={prevPage}
				styles={page <= 1 ? disable : ''}
			/>
			<span>{page}</span>
			<RightArrow
				className={classes.pagination_arrows}
				nextPage={nextPage}
				styles={page >= 10 ? disable : ''}
			/>
			<span
				onClick={() => setPage(10)}
				className={
					page >= 10 ? classes.disable : classes.pagination_text
				}
			>
				Last
			</span>
		</div>
	);
};

export default PaginationComponent;
