import Button from '../button/button.component';
import styles from './cart_dropdown.module.scss';

const CartDropdown = () => {
	return (
		<div className={styles.cart_dropdown_container}>
			<div className={styles.cart_items}>
				<Button>GO TO CHECKOUT</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
