import React from "react";
import { Link } from "react-router-dom";

import { Container, Text } from "../../styles/global";
// import api from "../../services/api";

function Landing() {
  return (
    <Container mode="light" id="page-landing">
      <Text mode="light">Landing Page</Text>
      <Link to="/user">Ir para usuário</Link>
    </Container>
  );
}

export default Landing;
