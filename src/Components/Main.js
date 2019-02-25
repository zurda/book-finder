import React, { Component } from "react";
import fetchBooks from "../utils/api";
import BooksList from "./BooksList";
import Loading from "./Loading";
import Error from "./Error";
import NoResults from "./NoResults";

class Main extends Component {
  state = {
    input: "",
    booksList: [],
    isLoading: false,
    error: null
  };

  getBooks = () => {
    this.setState({ isLoading: true });
    fetchBooks(this.state.input)
      .then(responseList => {
        this.setState({
          booksList: responseList.items,
          isLoading: false
        });
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  };

  render() {
    const { booksList, isLoading, error } = this.state;
    if (!isLoading && error) return <Error error={error} />;
    if (isLoading) return <Loading />;
    if (!booksList) return <NoResults />;
    return (
      <div className="main">
        <input
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <button onClick={() => this.getBooks()}>Get Books</button>
        <BooksList booksList={booksList} />
      </div>
    );
  }
}

export default Main;
