import { createUserDocumentFromAuth, singInWithGooglePopup } from '../../utils/firebase.utils';
import SignUpForm from '../sign_up/sign_up.component';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await singInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google popup</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
