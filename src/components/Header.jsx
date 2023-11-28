import React from "react";
import styled from "styled-components";

const HeaderWarpper = styled.div`
  background-color: blanchedalmond;
  padding: 0 50px;
  margin-bottom: 30px;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: salmon;
`;

function Header() {
  return (
    <HeaderWarpper>
      <Title>TodoList</Title>
      <Title>Redux</Title>
    </HeaderWarpper>
  );
}

export default Header;
