import { useState } from "react";
import { toast } from "react-toastify";

export default function useForm(onSubmit) {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    const userValue = e.currentTarget.value;
    setState(userValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.trim()) {
      return toast.info("Query string is empty");
    }
    onSubmit(state);
    setState("");
  };

  return [state, handleChange, handleSubmit];
}
