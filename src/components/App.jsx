import { Component } from 'react';
import { GlobalStyle } from 'helpers/GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Wrapper } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImages } from './services/PixabayApi';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    error: false,
    loader: false,
  };

  async componentDidUpdate() {
    try {
      if (this.state.loader) {
        const { hits } = await getImages(this.state);

        if (hits.length) {
          this.setState(({ photos }) => ({
            photos: [...photos, ...hits],
            loader: false,
          }));
        }
      }
    } catch (error) {
      this.setState({ error: true });
    }
  }

  onFormSubmit = ({ query }) => {
    this.setState({
      query,
      page: 1,
      photos: [],
      loader: true,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      loader: true,
    }));
  };

  render() {
    const { photos, loader, error } = this.state;
    const isShow = photos.length && !error;
    return (
      <Wrapper>
        <GlobalStyle />
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <ImageGallery photos={photos} />
        {loader && <Loader />}
        {isShow && <Button onClick={this.loadMore} />}
      </Wrapper>
    );
  }
}
