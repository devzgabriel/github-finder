import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../../styles/global";
import api from "../../services/api";

function User() {
  return (
    <Container mode="light" id="page-user">
      <h1>User Page</h1>
      <Link to="/users">Ir para Home</Link>
    </Container>
  );
}

export default User;
