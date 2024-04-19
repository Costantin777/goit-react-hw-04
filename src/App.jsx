import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchPhotos from "./fetchPhotos";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMassage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import "./App.css";

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    async function searchPictures() {
      if (query === "") {
        return;
      }
      setError(false);
      setLoading(true);
      try {
        const apiRequest = await fetchPhotos(query, page);
        setPhotos((prevState) => [...prevState, ...apiRequest]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    searchPictures();
  }, [query, page]);

  function onFormSubmit(searchedWord) {
    if (query.toLowerCase() !== searchedWord.toLowerCase()) {
      setPhotos([]);
      setQuery(searchedWord);
    }
    setPage(1);
  }

  function handleLoadMoreBtnClick() {
    setPage((prevState) => prevState + 1);
    setLoading(true);
  }

  function openModal(id) {
    setIsOpen(true);
    const selectedPhoto = photos.find((photo) => photo.id === id);
    setModalData(selectedPhoto);
  }

  function closeModal() {
    setIsOpen(false);
    setModalData(null);
  }

  return (
    <>
      <SearchBar onFormSubmit={onFormSubmit} />
      <main>
        <ImageGallery openModal={openModal} photos={photos} />
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {photos.length > 0 && !loading && (
          <LoadMoreBtn handleLoadMoreBtnClick={handleLoadMoreBtnClick} />
        )}
        {modalData && (
          <ImageModal
            modalContent={modalData}
            isOpen={modalIsOpen}
            closeModal={closeModal}
          />
        )}
      </main>{" "}
    </>
  );
};

export default App;
