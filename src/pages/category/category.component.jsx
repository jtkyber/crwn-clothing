import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductCard from '../../components/product_card/product_card.component';
import { CategoriesContext } from '../../contexts/contexts';
import styles from './category.module.scss';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<h2 className={styles.title}>{category.toUpperCase()}</h2>
			<div className={styles.category_container}>
				{products && products.map(product => <ProductCard key={product.id} product={product} />)}
			</div>
		</>
	);
};

export default Category;
