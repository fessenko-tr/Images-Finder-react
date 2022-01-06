import s from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loading from "./components/Loader";
import Modal from "./components/Modal";

import useFetch from "./hooks/useFetch";
import useModal from "./hooks/useModal";

function App() {
  const { handleFormSubmit, pics, isLoading, maxPageReached, updatePage } =
    useFetch();
  const [modal, openModal, closeModal] = useModal();

  return (
    <div className={s.App}>
      <Searchbar handleFormSubmit={handleFormSubmit} />

      <ImageGallery openModal={openModal} picsArray={pics} />

      {isLoading && <Loading />}

      {!isLoading && !maxPageReached && <Button loadMore={updatePage} />}

      {modal.isModalOpened && (
        <Modal closeModal={closeModal} modalImg={modal.modalURL} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
