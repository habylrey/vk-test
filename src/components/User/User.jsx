import classes from './User.module.css';
import AvatarImage from './../../assets/images/avatar.jpg';

export default function User() {
	return (
		<div className={classes.user_wrap}>
			<img className={classes.user_img} src={AvatarImage} alt="avatar" />
			<div className={classes.user_text__wrap}>
				<span className={classes.user_text__name}>megaCat2004</span>
				<div className={classes.user_text__state}>
					<div className={classes.user_text__state_point}></div>
					<span className={classes.user_text__state_text}>
						Online
					</span>
				</div>
			</div>
		</div>
	);
}
