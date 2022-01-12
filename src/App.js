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
  const { handleUserInput, pics, isLoading, maxPageReached, updatePage } =
    useFetch();
  const [modal, toggleModal] = useModal();

  return (
    <div className={s.App}>
      <Searchbar handleFormSubmit={handleUserInput} />

      <ImageGallery toggleModal={toggleModal} picsArray={pics} />

      {isLoading && <Loading />}

      {!isLoading && !maxPageReached && <Button loadMore={updatePage} />}

      {modal.isModalOpened && (
        <Modal toggleModal={toggleModal} modalImg={modal.modalURL} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
