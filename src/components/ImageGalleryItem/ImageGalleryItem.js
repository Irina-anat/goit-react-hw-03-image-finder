import css from './ImageGalleryItem.module.css';
import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';


class ImageGalleryItem extends Component {
    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        const { src, alt, largeImageURL } = this.props;

        return (
            <li className={css.gallary__item} onClick={this.toggleModal}>
                <img className={css.gallery__image} src={src} alt={alt} loading='lazy' />
                {showModal && (
                    <Modal
                        largeImageURL={largeImageURL}
                        tags={alt}
                        closeModal={this.toggleModal}
                    />
                )}
            </li>
        );
    }
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
