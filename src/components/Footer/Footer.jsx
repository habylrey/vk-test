import GithubIcon from '../../assets/icons/GithubIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import SpotifyIcon from '../../assets/icons/SpotifyIcon';
import classes from './Footer.module.css';
export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer_container}>
				<hr className={classes.footer_line} />
				<ul className={classes.footer_socialMedia}>
					<li>
						<a href="#">
							<InstagramIcon />
						</a>
					</li>
					<li>
						<a href="#">
							<SpotifyIcon />
						</a>
					</li>
					<li>
						<a href="#">
							<GithubIcon />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
