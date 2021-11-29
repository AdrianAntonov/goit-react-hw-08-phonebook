// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import * as phonebookActions from "../../redux/phonebook/phonebook-actions";
import { filter } from "../../redux/phonebook/phonebook-selectors";
import styles from "./Filter.module.css";

// function Filter({ value, onChange }) {
export default function Filter() {
  const value = useSelector(filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <input
        className={styles.input}
        type="text"
        name="filter"
        id="filter"
        value={value}
        // onChange={onChange}
        onChange={(e) =>
          dispatch(phonebookActions.filterContact(e.target.value))
        }
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(phonebookActions.filterContact(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
