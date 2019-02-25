import React from "react";
import Card from "./Card";

import styled from "styled-components";

const Container = styled.ul`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`;

const BookList = props => {
  const { booksList } = props;
  return (
    <Container>
      {booksList.map(book => (
        <Card book={book} key={book.id + book.title} />
      ))}
    </Container>
  );
};

export default BookList;
