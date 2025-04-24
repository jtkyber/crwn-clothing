import SignInForm from '../sign_in/sign_in.component';
import SignUpForm from '../sign_up/sign_up.component';
import styles from './authentication.module.scss';

const Authentication = () => {
	return (
		<div className={styles.authentication_container}>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
