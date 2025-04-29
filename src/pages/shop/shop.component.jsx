import { Route, Routes } from 'react-router';
import CategoriesPreview from '../categories_preview/categories_preview.component';
import Category from '../category/category.component';

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
