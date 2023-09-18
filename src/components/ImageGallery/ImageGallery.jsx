import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ photos }) => (
  <List>
    {photos.map(({ id, ...rest }) => (
      <li key={id}>
        <ImageGalleryItem {...rest} />
      </li>
    ))}
  </List>
);
