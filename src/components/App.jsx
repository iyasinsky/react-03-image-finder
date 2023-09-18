import { Component } from 'react';
import { GlobalStyle } from 'helpers/GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Wrapper } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImages } from './services/PixabayApi';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const { query: prevQuery, page: prevPage } = prevState;
    const { query: nextQuery, page: nextPage } = this.state;

    if (prevQuery !== nextQuery) {
      // this.setState({ isLoading: true, error: null });
      this.setState({ page: 1 });

      const { hits } = await getImages(this.state);
      console.log('prevQuery !== nextQuery:', hits);

      this.setState({ photos: hits });
    }

    if (prevPage !== nextPage) {
      const { hits } = await getImages(this.state);
      console.log('prevPage !== nextPage:', hits);

      this.setState(({ photos }) => ({
        photos: [...photos, ...hits],
      }));
    }
  }

  onFormSubmit = ({ query }) => {
    this.setState({ query });
  };

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // resetPage = () => {
  //   this.setState({ page: 1 });
  // };

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <ImageGallery photos={this.state.photos} />
        <Button onClick={this.incrementPage} />
      </Wrapper>
    );
  }
}

// async componentDidUpdate(_, prevState) {
//   if (
//     prevState.query !== this.state.query ||
//     prevState.page !== this.state.page
//   ) {
//     try {
//       this.setState({ isLoading: true, error: null });
//       const { hits } = await getImages(this.state);
//       console.log(hits);
//       this.setState(prevState => ({
//         photos: [...prevState.photos, ...hits],
//       }));
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }
// }
