import { createContext } from 'react';

// Actual value that will be acccessed
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
});

export const CartContext = createContext({
	cartOpen: false,
	setCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CategoriesContext = createContext({
	categoriesMap: {},
	setCategoriesMap: () => {},
});
