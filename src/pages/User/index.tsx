import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Text } from "../../styles/global";

import { AppContext } from "../../contexts/AppContext";

// import api from "../../services/api";

function User() {
  const {
    state: { theme },
  } = useContext(AppContext);

  return (
    <Container theme={theme} id="page-user">
      <Text theme={theme}>User Page</Text>
      <Link to="/">Ir para Home</Link>
    </Container>
  );
}

export default User;
