import { Link } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link
        to={`/shop/${title.toLowerCase()}`}
        className="category-body-container"
      >
        <div>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
