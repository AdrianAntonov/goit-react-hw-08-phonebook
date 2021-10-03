import PropTypes from "prop-types";
import styles from "./Filter.module.css";

function Filter({ filter }) {
  const getFilterValue = (e) => {
    filter(e.target);
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <input
        className={styles.input}
        type="text"
        name="filter"
        id="filter"
        onChange={getFilterValue}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.func,
};

export default Filter;
