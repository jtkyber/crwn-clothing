import { useContext } from 'react';
import CategoryPreview from '../../components/category_preview/category_preview.component';
import { CategoriesContext } from '../../contexts/contexts';

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<>
			{Object.keys(categoriesMap).map(title => {
				const products = categoriesMap[title];
				return <CategoryPreview key={title} title={title} products={products} />;
			})}
		</>
	);
};

export default CategoriesPreview;
