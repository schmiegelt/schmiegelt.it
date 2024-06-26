// Container.js
import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer";

const ContainerWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            {children}
            <Footer />
        </ContainerWrapper>)
};