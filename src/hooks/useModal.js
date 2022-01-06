import { useState } from "react";

export default function useModal() {
  const [state, setState] = useState({ modalURL: "", isModalOpened: false });

  function openModal(url) {
    setState({ modalURL: url, isModalOpened: true });
  }

  function closeModal() {
    setState({ modalURL: "", isModalOpened: false });
  }

  return [state, openModal, closeModal];
}
