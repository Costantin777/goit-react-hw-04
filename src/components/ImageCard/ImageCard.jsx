import css from "./ImageCard.module.css";

function ImageCard({ id, alt, url, openModal, modalContent }) {
  function handleClick(id) {
    modalContent(id);
    openModal();
  }

  return (
    <div>
      <img
        onClick={() => handleClick(id)}
        className={css.listImage}
        src={url}
        alt={alt}
      />
    </div>
  );
}

export default ImageCard;
