import { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import crwnLogo from '../../assets/crown.svg';
import CartDropdown from '../../components/cart_dropdown/cart_dropdown.component';
import CartIcon from '../../components/cart_icon/cart_icon.component';
import { CartContext } from '../../components/contexts/cart.context';
import { UserContext } from '../../components/contexts/user.context';
import { signOutUser } from '../../utils/firebase.utils';
import styles from './navigation.module.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { cartOpen } = useContext(CartContext);

	return (
		<>
			<div className={styles.navigation}>
				<Link className={styles.logo_container} to={'/'}>
					<img src={crwnLogo} alt='CrwnLogo' />
				</Link>
				<div className={styles.nav_links_container}>
					<Link className={styles.nav_link} to={'/shop'}>
						SHOP
					</Link>
					{currentUser ? (
						<span className={styles.nav_link} onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className={styles.nav_link} to={'/auth'}>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
			</div>
			{cartOpen && <CartDropdown />}
			<Outlet />
		</>
	);
};

export default Navigation;
