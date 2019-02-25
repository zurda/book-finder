import React from "react";

import styled from "styled-components";

const Container = styled.li`
  text-align: center;
  list-style: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 2em;
  max-width: 20em;
  min-width: 20em;
`;

const Card = props => {
  const { infoLink, imageLinks, title, description } = props.book.volumeInfo;
  return (
    <Container className="card">
      <img src={imageLinks ? imageLinks.thumbnail : null} alt={title} />
      <h3>{title}</h3>
      <p>
        {description
          ? `${description.slice(0, 300).trim()}...`
          : "Description not available"}
      </p>
      <a href={infoLink}>Read More</a>
    </Container>
  );
};

export default Card;
