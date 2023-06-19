import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');
        document.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        document.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    };

    handleBackdropClick = (e) => {
        console.log('Click on Backdrop');
        if (e.target === e.currentTarget) {
            this.props.closeModal();
        }
    };

    render() {
        const { tags, largeImageURL } = this.props;
        return createPortal(
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>,
            modalRoot
        );
    }
};

Modal.propTypes = {
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};


export default Modal;


