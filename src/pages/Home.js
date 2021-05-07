import React from "react";
import SalesCard from "../components/SalesCard/SalesCard";
import RepairsCard from "../components/RepairsCard/RepairsCard";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Item>
      <SalesCard />
      <RepairsCard />
    </Item>
  );
};

const Item = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export default HomePage;
