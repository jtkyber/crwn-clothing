import styles from './button.module.scss';

const BUTTON_TYPE_CLASSES = {
	google: 'google_sign_in',
	inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`${styles.button_container} ${styles[BUTTON_TYPE_CLASSES[buttonType]]}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default Button;
