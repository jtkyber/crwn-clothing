import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import styles from './checkout_item.module.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	return (
		<div className={styles.checkout_item_container}>
			<div className={styles.image_container}>
				<img src={imageUrl} alt={name} />
			</div>
			<span className={styles.name}>{name}</span>
			<span className={styles.quantity}>
				<div onClick={removeItemHandler} className={styles.arrow}>
					&#10094;
				</div>
				<span className={styles.value}>{quantity}</span>
				<div onClick={addItemHandler} className={styles.arrow}>
					&#10095;
				</div>
			</span>
			<span className={styles.price}>{price}</span>
			<div onClick={clearItemHandler} className={styles.remove_button}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
