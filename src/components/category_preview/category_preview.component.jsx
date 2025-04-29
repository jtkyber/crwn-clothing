import { Link } from 'react-router';
import ProductCard from '../product_card/product_card.component';
import styles from './category_preview.module.scss';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className={styles.category_preview_container}>
			<h2>
				<Link to={title} className={styles.title}>
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className={styles.preview}>
				{products
					.filter((_, index) => index < 4)
					.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
