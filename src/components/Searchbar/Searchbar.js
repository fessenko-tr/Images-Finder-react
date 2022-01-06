import PropTypes from "prop-types";
import s from "./Searchbar.module.css";
import useForm from "../../hooks/useForm";

function Searchbar({ handleFormSubmit }) {
  const [userValue, handleChange, handleSubmit] = useForm(handleFormSubmit);

  const {
    searchbar,
    searchForm,
    searchFormButton,
    searchFormButtonLabel,
    searchFormInput,
  } = s;

  return (
    <header className={searchbar}>
      <form className={searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={searchFormButton}>
          <span className={searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={userValue}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
