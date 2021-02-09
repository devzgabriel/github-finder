import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Text } from "../../styles/global";
import GlobalStyle from "../../styles/global";

import { AppContext } from "../../contexts/AppContext";

// import api from "../../services/api";

function Landing() {
  const {
    state: { theme },
  } = useContext(AppContext);

  return (
    <>
      <Container mode={theme} id="page-landing">
        <GlobalStyle />
        <Text mode={theme}>Landing Page</Text>
        <Link to="/user">Ir para usuário</Link>
      </Container>
    </>
  );
}

export default Landing;
