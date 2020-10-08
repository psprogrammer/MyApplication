import React, { Component } from "react";
import "./FilterOptions.css";

class FilterOptions extends Component {
  render() {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input
              type="radio"
              value="All"
              id="filter_all"
              name="filter"
              checked={filterOption === "All"}
              onChange={e => this.props.handleFilterChange(e.target.value)}
            />
            All
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_uploaded">
            <input
              type="radio"
              value="Uploaded"
              id="filter_uploaded"
              name="filter"
              checked={filterOption === "Uploaded"}
              onChange={e => this.props.handleFilterChange(e.target.value)}
            />
            Uploaded
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_synced">
            <input
              type="radio"
              value="Synced"
              id="filter_synced"
              name="filter"
              checked={filterOption === "Synced"}
              onChange={e => this.props.handleFilterChange(e.target.value)}
            />
            Synced
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_new">
            <input
              type="radio"
              value="New"
              id="filter_new"
              name="filter"
              checked={filterOption === "New"}
              onChange={e => this.props.handleFilterChange(e.target.value)}
            />
            New
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
