import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBRKPGtHw9BJEIX5G5vQPdcL8AdBNV-7AA',
	authDomain: 'crwn-clothing-db-fa9a3.firebaseapp.com',
	projectId: 'crwn-clothing-db-fa9a3',
	storageBucket: 'crwn-clothing-db-fa9a3.firebasestorage.app',
	messagingSenderId: '892794899717',
	appId: '1:892794899717:web:f575686d22f7b5e4f1fb6c',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;
};
