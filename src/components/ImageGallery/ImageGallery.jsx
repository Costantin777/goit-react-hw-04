import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ photos, openModal }) {
  return (
    <ul className={css.galleryList}>
      {photos.map((photo) => (
        <li className={css.galleryListItem} key={photo.id}>
          <ImageCard
            id={photo.id}
            alt={photo.alt_description}
            url={photo.urls.small}
            openModal={() => openModal(photo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
