import React from "react";
import Main from "./Components/Main";
import styled from "styled-components";

const Header = styled.h1`
  color: goldenrod;
  font-size: 2.8em;
  margin: 25px auto;
  border-bottom: 1px solid goldenrod;
  display: block;
  text-align: center;
`;

const App = () => {
  return (
    <div className="App">
      <Header className="App-header">Find a book, any book</Header>
      <Main />
    </div>
  );
};

export default App;
