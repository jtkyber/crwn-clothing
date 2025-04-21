import { Link, Outlet } from 'react-router';
import crwnLogo from '../../assets/crown.svg';
import styles from './navigation.module.scss';

const Navigation = () => {
	return (
		<>
			<div className={styles.navigation}>
				<Link className={styles.logo_container} to={'/'}>
					<img src={crwnLogo} alt='CrwnLogo' />
				</Link>
				<div className={styles.nav_links_container}>
					<Link className={styles.nav_link} to={'/shop'}>
						Shop
					</Link>
					<Link className={styles.nav_link} to={'/sign-in'}>
						Sign In
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
