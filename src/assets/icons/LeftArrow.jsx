import './ArrowStyles.css';
export default function LeftArrow({ styles, prevPage }) {
	return (
		<svg
			style={{ cursor: 'pointer' }}
			onClick={prevPage}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="gray"
			className={styles}
			width="30px"
			height="30px"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
			/>
		</svg>
	);
}
