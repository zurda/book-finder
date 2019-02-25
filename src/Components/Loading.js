import React from "react";

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Loading = () => {
  return (
    <Container className="loading">
      <h3>Loading...</h3>
    </Container>
  );
};

export default Loading;
