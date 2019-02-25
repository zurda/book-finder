import React from "react";

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Error = props => {
  return (
    <Container className="error">
      <h3>There was an error fetching the data</h3>
      <p>{props.error}</p>
    </Container>
  );
};

export default Error;
