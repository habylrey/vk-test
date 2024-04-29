import VkIcon from './VkIcon';
import classes from './VkinoLogo.module.css';
export default function VkinoLogo() {
	return (
		<a href="/" className={classes.logo_wrap}>
			<VkIcon
				height={'50px'}
				width={'50px'}
				className={classes.logo_icon}
			/>
			<span className={classes.logo_text}>Вкино</span>
		</a>
	);
}
