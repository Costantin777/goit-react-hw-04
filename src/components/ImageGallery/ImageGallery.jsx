import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ photos, handleModal }) {
  return (
    <ul className={css.galleryList}>
      {photos.map((photo) => (
        <li className={css.galleryListItem} key={photo.id}>
          <ImageCard
            id={photo.id}
            alt={photo.alt_description}
            url={photo.urls.small}
            handleModal={() =>
              handleModal(photo.id, photo.alt_description, photo.urls.small)
            }
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
