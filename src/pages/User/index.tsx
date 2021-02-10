import React, { useContext } from "react";

import { Container, Text } from "../../styles/global";
import Header from "../../components/Header";

import { AppContext } from "../../context/AppContext";
import Button from "../../components/Button";

// import api from "../../services/api";

function User() {
  const {
    state: { user },
  } = useContext(AppContext);

  return (
    <Container id="page-user">
      <Header />
      <Text>User Page</Text>
      <Button>Ir para Home</Button>
    </Container>
  );
}

export default User;
