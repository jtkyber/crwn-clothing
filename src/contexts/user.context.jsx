import { useEffect, useReducer } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangeListener } from '../utils/firebase.utils';
import { createAction } from '../utils/reducer/reducer.utils';
import { UserContext } from './contexts';

const INITIAL_STATE = {
	currentUser: null,
};

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
	console.log('dispatched');
	console.log(action);
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				currentUser: payload,
			};
		default:
			throw new Error(`Unhandled type of ${type} in userReducer`);
	}
};

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;
	console.log(currentUser);

	const setCurrentUser = user => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
	};

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
