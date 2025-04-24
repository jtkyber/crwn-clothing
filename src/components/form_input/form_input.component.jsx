import styles from './form_input.module.scss';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className={styles.group}>
			<input className={styles.form_input} {...otherProps} />
			{label ? (
				<label className={`${styles.form_input_label} ${otherProps.value.length ? styles.shrink : null}`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
