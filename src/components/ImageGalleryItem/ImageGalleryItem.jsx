export const ImageGalleryItem = ({ tags, webformatURL, largeImageURL }) => (
  <img src={webformatURL} alt={tags} />
);
