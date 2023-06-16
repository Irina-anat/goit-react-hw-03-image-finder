import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {

    componentDidMount() {
    console.log('Modal componentDidMount')   
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
    console.log('Modal componentWillUnmount')
        window.removeEventListener('keydown', this.handleKeyDown);     
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
    console.log('Click on Backdrop')
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
    };

    render() {
        return createPortal(
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}><img src="" alt="" />я тут</div>
        </div>,
        modalRoot);
    }
};

export default Modal;


