import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;
const NoResults = () => {
  return (
    <Container className="no-results">
      <h3>
        Search for a book you like
        <br />
        and find similar recommendations
      </h3>
    </Container>
  );
};

export default NoResults;
