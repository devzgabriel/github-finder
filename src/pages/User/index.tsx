import React from "react";
import { Link } from "react-router-dom";

import { Container, Text } from "../../styles/global";
// import api from "../../services/api";

function User() {
  return (
    <Container mode="light" id="page-user">
      <Text mode="light">User Page</Text>
      <Link to="/">Ir para Home</Link>
    </Container>
  );
}

export default User;
