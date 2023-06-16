import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';



class App extends Component{
  state = {
    showModal: false,
    loading: false,
    searchQuery: ""
  };

  hangleFormSubmit = searchQuery => {
    this.setState({ searchQuery })
}



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
        <Searchbar onSubmitImage={this.hangleFormSubmit } />
        {this.state.loading && <h2>...Завантаження....</h2>}
         
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