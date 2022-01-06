import axiosInstance from "../api/pixabay";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

export default function useFetch() {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pics, setPics] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPageReached, setMaxPageReached] = useState(true);

  useEffect(() => {
    if (userInput === "") {
      return;
    }

    async function fetchPics() {
      setIsLoading(true);

      try {
        const { data } = await axiosInstance.request({
          params: { q: userInput, page },
        });

        if (!data.hits.length) {
          throw new Error("No Pictures Found");
        }

        setPics([...pics, ...data.hits]);

        isMaxPageReached(data.hits);
      } catch (error) {
        toast.info(error.message);
        setMaxPageReached(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPics();
  }, [userInput, page]);

  function handleUserInput(userValue) {
    if (userValue === userInput && page === 1) {
      return;
    }
    reset(userValue);
  }

  function reset(userValue) {
    setPage(1);
    setPics([]);
    setUserInput(userValue);
  }

  function updatePage() {
    setPage(page + 1);
  }

  function isMaxPageReached(response) {
    if (response.length < 12) {
      setMaxPageReached(true);
    } else {
      setMaxPageReached(false);
    }
  }

  return { handleUserInput, pics, isLoading, maxPageReached, updatePage };
}
