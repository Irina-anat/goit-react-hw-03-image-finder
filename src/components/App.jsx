import React, { Component } from 'react';
/*import Modal from './Modal/Modal';*/
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'servises/api';



class App extends Component{
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    error: null,
   /* showModal: false,
    largeImageURL: 'largeImageURL',*/
    page: 1,
    per_page: 12,
    id: null,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImages(searchQuery, page);
    }
  };

   getImages = async (query, page) => {
    this.setState({ isLoading: true });
    if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(query, page);
      console.log(hits, totalHits);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  hangleFormSubmit = searchQuery => {
    this.setState({ searchQuery, images: [],})
}

  onloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  /*openModal = (largeImageURL) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  */

  render() {
    const {  images,  loadMore, page, } = this.state;
    return (
      <div>
        <Searchbar onSubmitImage={this.hangleFormSubmit } />
        
         
        <ImageGallery images={images}  />
        {loadMore && <Button onloadMore={this.onloadMore} page={page} />}
        
        <ToastContainer autoClose={3000} />
    </div> 
    )
  }
    };

export { App };


  
  
 /* openModal = largeImageURL => {
    console.log(largeImageURL);
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
    });
  };
   {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}


        <div>
        <Searchbar onSubmitImage={this.hangleFormSubmit } />
        
         
        <ImageGallery images={images} openModal={this.openModal}  />
        {loadMore && <Button onloadMore={this.onloadMore} page={page} />};
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )};
        <ToastContainer autoClose={3000} />
    </div> 
  */
  
  
  
  
  
  
  
  
  
/*
*/
/*class App extends Component{
  state = {
    showModal: false,
  };

 //закриття і відкриття вікна
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery />
    
        <Button/>
        <button type="button" onClick={this.toggleModal}>OpenModal</button>
        {showModal &&
          <Modal onClose={this.toggleModal}>
         <button type="button" onClick={this.toggleModal}>Close</button> 
        </Modal>}
         
    </div> 
    )}
    };

export { App };
*/ 