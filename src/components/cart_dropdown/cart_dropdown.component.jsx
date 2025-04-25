import { useContext } from 'react';
import { useNavigate } from 'react-router';
import Button from '../button/button.component';
import CartItem from '../cart_item/cart_item.component';
import { CartContext } from '../contexts/cart.context';
import styles from './cart_dropdown.module.scss';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	return (
		<div className={styles.cart_dropdown_container}>
			<div className={styles.cart_items}>
				{cartItems.map(item => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
