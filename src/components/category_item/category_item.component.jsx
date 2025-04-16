import styles from './category_item.module.scss';

const CategoryItem = ({ category }) => {
	const { title, imageUrl } = category;

	return (
		<div className={styles.category_container}>
			<div className={styles.background_image} style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className={styles.category_body_container}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
