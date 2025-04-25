import { useContext } from 'react';
import { ProductsContext } from '../../components/contexts/products.context';
import ProductCard from '../../components/product_card/product_card.component';
import styles from './shop.module.scss';

const Shop = () => {
	const { products } = useContext(ProductsContext);

	return (
		<div className={styles.products_container}>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Shop;
