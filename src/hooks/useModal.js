import { useState } from "react";

export default function useModal() {
  const [state, setState] = useState({ modalURL: "", isModalOpened: false });

  function toggleModal(url) {
    const { isModalOpened } = state;
    if (isModalOpened) {
      setState({ modalURL: "", isModalOpened: false });
      return;
    }
    setState({ modalURL: url, isModalOpened: true });
  }

  return [state, toggleModal];
}
