import { Component } from 'react';
// import axios from 'axios';
import { GlobalStyle } from 'helpers/GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Wrapper } from './App.styled';
// import test from '../helpers/test';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=39495735-1e28386ea245dafd6542f3284&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(console.log);
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

  resetPage = () => {
    this.setState({ page: 1 });
  };

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
