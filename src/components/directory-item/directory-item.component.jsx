import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link to={`/shop/${title.toLowerCase()}`} className="body">
        <div>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </Link>
    </div>
  );
};

export default DirectoryItem;
