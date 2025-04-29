import { useNavigate } from 'react-router';
import styles from './directory_item.module.scss';

const DirectoryItem = ({ category }) => {
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<div onClick={onNavigateHandler} className={styles.directory_item_container}>
			<div className={styles.background_image} style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className={styles.body}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
