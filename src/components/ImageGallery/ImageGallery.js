import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

function ImageGallery({ picsArray, toggleModal }) {
  const imagesList = picsArray.map((el) => (
    <ImageGalleryItem
      key={el.pageURL}
      imgModal={el.largeImageURL}
      imgPreview={el.webformatURL}
      toggleModal={toggleModal}
    />
  ));
  return <ul className={s.ImageGallery}>{imagesList}</ul>;
}
ImageGallery.propTypes = {
  picsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
