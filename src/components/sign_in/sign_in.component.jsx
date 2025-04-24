import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	singInWithGooglePopup,
} from '../../utils/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form_input/form_input.component';
import styles from './sign_in.module.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetForm = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await singInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(email, password);
			console.log(response);
			resetForm();
		} catch (err) {
			if (err.code === 'auth/invalid-credential') {
				alert('Incorrect email or password');
			}
			console.log(err);
		}
	};

	return (
		<div className={styles.sign_in_container}>
			<h2>Already have an account?</h2>
			<span>Sign up with your email and password</span>
			<form
				onSubmit={e => {
					handleSubmit(e);
				}}>
				<FormInput
					label={'Email'}
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					autoComplete=''
					required
				/>

				<FormInput
					label={'Password'}
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					autoComplete=''
					minLength={6}
					required
				/>

				<div className={styles.buttons_container}>
					<Button type='submit'>Sign In</Button>
					<Button onClick={signInWithGoogle} buttonType='google' type='button'>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
