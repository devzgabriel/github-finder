import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../../styles/global";
// import api from "../../services/api";

function Landing() {
  return (
    <Container mode="light" id="page-landing">
      <h1>Landing Page</h1>
      <Link to="/users">Ir para usuário</Link>
    </Container>
  );
}

export default Landing;
