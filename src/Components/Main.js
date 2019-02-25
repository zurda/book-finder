import React, { Component } from "react";
import fetchBooks from "../utils/api";
import BooksList from "./BooksList";
import Loading from "./Loading";
import Error from "./Error";
import NoResults from "./NoResults";

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2em;
`;

const Input = styled.input`
  font-size: 1em;
  padding: 0.4em;
  margin: 25px auto;
  display: inline-block;
`;

const Button = styled.button`
  font-size: 1em;
  padding: 0.5em;
  margin: 25px auto;
  display: inline-block;
`;

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
      <Container className="main">
        <Text>Enter a book you like to find recommendations</Text>
        <Input
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <Button onClick={this.state.input ? () => this.getBooks() : null}>
          Get Books
        </Button>
        <BooksList booksList={booksList} />
      </Container>
    );
  }
}

export default Main;
