import { useContext } from 'react';
import CheckoutItem from '../../components/checkout_item/checkout_item.component';
import { CartContext } from '../../components/contexts/cart.context';
import styles from './checkout.module.scss';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div className={styles.checkout_container}>
			<div className={styles.checkout_header}>
				<div className={styles.header_block}>
					<span>Product</span>
				</div>
				<div className={styles.header_block}>
					<span>Description</span>
				</div>
				<div className={styles.header_block}>
					<span>Quantity</span>
				</div>
				<div className={styles.header_block}>
					<span>Price</span>
				</div>
				<div className={styles.header_block}>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<span className={styles.total}>Total: ${cartTotal}</span>
		</div>
	);
};

export default Checkout;
