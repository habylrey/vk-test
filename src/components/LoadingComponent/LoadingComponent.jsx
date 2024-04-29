import classes from './LoadingComponent.module.css';
export default function LoadingComponent() {
	return (
		<div className={classes.loader_wrap}>
			<div className={classes.loader}></div>
		</div>
	);
}
