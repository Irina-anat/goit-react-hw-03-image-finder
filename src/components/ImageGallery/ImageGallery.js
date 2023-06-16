import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from'./ImageGallery.module.css';


const ImageGallery = () => {
    return (
        <ul className={ css.image__gallery }>
           <ImageGalleryItem/>
            {/*<!-- Набір li із зображеннями -->*/}
        </ul>
    )
};

export default ImageGallery;