import css from "./ImageCard.module.css";

function ImageCard({ id, alt, url, openModal }) {
  function handleClick() {
    openModal(id);
  }

  return (
    <div>
      <img
        onClick={handleClick}
        className={css.listImage}
        src={url}
        alt={alt}
      />
    </div>
  );
}

export default ImageCard;
