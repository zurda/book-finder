import React from "react";
import Card from "./Card";

const BookList = props => {
  const { booksList } = props;
  return (
    <ul>
      {booksList.map(book => (
        <Card book={book} key={book.id} />
      ))}
    </ul>
  );
};

export default BookList;
