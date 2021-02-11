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

  const {
    login: username,
    avatar_url,
    url,
    name,
    bio,
    public_repos,
    followers,
    following,
  } = user;

  return (
    <Container id="page-user">
      <Header />
      {/* Precisa de um main */}
      <Card
        name={name}
        username={username}
        avatar={avatar_url}
        bio={bio}
        url={url}
        public_repos={public_repos}
        followers={followers}
        following={following}
      />
    </Container>
  );
}

export default User;
