import React from "react";

const Card = props => {
  const { infoLink, imageLinks, title, description } = props.book.volumeInfo;
  return (
    <li className="card">
      <img src={imageLinks ? imageLinks.thumbnail : null} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={infoLink}>Read More</a>
    </li>
  );
};

export default Card;
