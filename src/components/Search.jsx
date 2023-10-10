import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleFilter = (event) => {
    this.setState(
      () => ({
        type: event.target.dataset.type,
      }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col s12">
            <div className="input-field">
              <input
                type="search"
                className="validate"
                placeholder="search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
              />
            </div>
            <button
              className="btn search-btn"
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <p>
            <label>
              <input
                value={this.state.type}
                onChange={this.handleFilter}
                data-type="all"
                name="type"
                type="radio"
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                value={this.state.type}
                onChange={this.handleFilter}
                data-type="movie"
                name="type"
                type="radio"
                checked={this.state.type === "movie"}
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                value={this.state.type}
                onChange={this.handleFilter}
                data-type="series"
                name="type"
                type="radio"
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </>
    );
  }
}
export default Search;
