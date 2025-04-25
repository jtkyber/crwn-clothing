import styles from './cart_item.module.scss';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<div className={styles.cart_item_container}>
			<img src={imageUrl} alt={name} />
			<div className={styles.item_details}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
