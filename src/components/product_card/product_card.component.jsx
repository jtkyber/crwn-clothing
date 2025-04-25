import Button from '../button/button.component';
import styles from './product_card.module.scss';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;

	return (
		<div className={styles.product_card_container}>
			<img src={imageUrl} alt={`${name}`} />
			<div className={styles.footer}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{price}</span>
			</div>
			<Button buttonType='inverted'>Add to cart</Button>
		</div>
	);
};

export default ProductCard;
