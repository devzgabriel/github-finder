import React, { useContext } from "react";

import { Container } from "../../styles/global";
import Header from "../../components/Header";
import Card from "../../components/Card";

import { AppContext } from "../../context/AppContext";

// import api from "../../services/api";

function User() {
  const {
    state: { user },
  } = useContext(AppContext);

  console.log(user);

  return (
    <Container id="page-user">
      <Header />
      {/* Precisa de um main */}
      <Card
        name="Gabriel Silva"
        username="devzgabriel"
        avatar=""
        bio="Looking for a rocket, lorem asdkasjhk jfhnds ajhsdgfkj sdbfkj"
      />
    </Container>
  );
}

export default User;
