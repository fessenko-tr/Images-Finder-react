import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

const modalRoot = document.getElementById("modal");

function Modal({ closeModal, modalImg }) {
  function close(e) {
    console.log("im here");
    if (e.code === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  });

  const { modal, overlay, modalImage } = s;

  return createPortal(
    <div onClick={closeModal} className={overlay}>
      <div className={modal}>
        <img className={modalImage} src={modalImg} alt="Big Modal Pic" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
};

export default Modal;
