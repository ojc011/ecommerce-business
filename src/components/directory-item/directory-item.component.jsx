import { BackgroundImage, BodyLink, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <BodyLink to={`/shop/${title.toLowerCase()}`}>
        <div>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </BodyLink>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
