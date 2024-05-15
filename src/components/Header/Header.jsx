import VkinoLogo from '../UI/Logo/VkinoLogo';
import SearchInput from '../UI/SearchInput/SearchInput';
import User from '../User/User';
import classes from './Header.module.css';
export default function Header() {
	return (
		<header className={classes.header}>
			<div className={classes.header_alert}>
				Для корректной работы сайта рекомендуется включение VPN!
			</div>
			<nav className={classes.header_container}>
				<VkinoLogo />
				<SearchInput />
				<User />
			</nav>
		</header>
	);
}
