import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form_input/form_input.component';
import styles from './sign_up.module.scss';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetForm = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			setCurrentUser(user);
			await createUserDocumentFromAuth(user, { displayName });

			resetForm();
		} catch (err) {
			if (err.code === 'auth/email-already-in-use') {
				alert('Cannot create user. Email already in use');
			} else {
				console.error(err);
			}
		}
	};

	return (
		<div className={styles.sign_up_container}>
			<h2>Don't have an account?</h2>
			<span>Sign up with you email and password</span>
			<form
				onSubmit={e => {
					handleSubmit(e);
				}}>
				<FormInput
					label={'Display Name'}
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					autoComplete=''
					required
				/>

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

				<FormInput
					label={'Confirm Password'}
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					autoComplete=''
					required
				/>

				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
