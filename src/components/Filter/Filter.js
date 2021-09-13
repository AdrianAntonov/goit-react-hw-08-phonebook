import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export class Filter extends Component {
  static propTypes = {
    filter: PropTypes.func,
  };

  getFilterValue = (e) => {
    this.props.filter(e.target);
  };

  render() {
    return (
      <div className={styles.filter}>
        <label htmlFor="filter">Find contacts by name</label>
        <br />
        <input
          className={styles.input}
          type="text"
          name="filter"
          id="filter"
          onChange={this.getFilterValue}
        />
      </div>
    );
  }
}

export default Filter;
