import MyInput from '../MyInput/MyInput';
import SearchIcon from '../../../assets/icons/SearchIcon';
import classes from './SearchInput.module.css';
export default function SearchInput() {
	const styleSearchIcon = {
		position: 'absolute',
		right: '0',
		top: '50%',
		background: 'transparent',
		cursor: 'pointer',
		width: '25px',
		height: '25px',
		transform: 'translate(-50%, -50%)',
	};
	return (
		<div className={classes.searchInput_wrap}>
			<MyInput placeholder="Поиск по фильмам" type="text" />
			<SearchIcon
				styles={styleSearchIcon}
				className={classes.searchInput_icon}
			/>
		</div>
	);
}
