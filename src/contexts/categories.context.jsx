import { useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils.js';
import { CategoriesContext } from './contexts.js';

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};

		getCategoriesMap();
	}, []);

	const value = {
		categoriesMap,
	};

	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
