// Container.js
import React from "react";
import styled from "styled-components";
import Seo from "../components/Seo"
import { Container } from "../components/Container"

const ContactWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export default function Home() {
  
    return (
      <Container>
        
          <Seo Sitetitle="Home" />
          Test
        
      </Container>
    )
  }