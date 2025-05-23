import { useContext } from 'react';
import shoppingIcon from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/contexts';
import styles from './cart_icon.module.scss';

const CartIcon = () => {
	const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);

	const toggleCart = () => setCartOpen(!cartOpen);

	return (
		<div onClick={toggleCart} className={styles.cart_icon_container}>
			<img className={styles.shopping_icon} src={shoppingIcon} alt='shopping icon' />
			<span className={styles.item_count}>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
