import { createContext, useEffect, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangeListener } from '../../utils/firebase.utils';

// Actual value that will be acccessed
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

// A functional component that wraps around and gives access to anything inside
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangeListener(user => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
