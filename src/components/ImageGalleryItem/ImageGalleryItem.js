import css from  './ImageGalleryItem.module.css';


const ImageGalleryItem = () => {
    return (
        <li className={css.gallary__item }>
            <img className={css.gallery__image} src="" alt="" />
        </li>
    )
};

export default ImageGalleryItem;