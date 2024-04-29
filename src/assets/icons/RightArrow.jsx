import './ArrowStyles.css';
export default function RightArrow({ styles, nextPage }) {
	return (
		<svg
			style={{ cursor: 'pointer' }}
			onClick={nextPage}
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
				d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
			/>
		</svg>
	);
}
