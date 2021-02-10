import React, { useContext, useState } from "react";

import { Container, Main, Text, Form } from "../../styles/global";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { AppContext } from "../../contexts/AppContext";

// import api from "../../services/api";

function Landing() {
  const {
    state: { theme },
  } = useContext(AppContext);

  const [username, setUsername] = useState("");

  async function searchUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Container theme={theme} id="page-landing">
      <Main>
        <Text theme={theme} font="title">
          GitHub Finder
        </Text>
        <Text theme={theme} font="semi-title">
          Seu site para encontrar programadores de maneira rápida e fácil!
        </Text>
        <Text theme={theme} font="paragraph">
          Digite o nome do desenvolvedor abaixo
        </Text>

        <Form onSubmit={(event) => searchUser(event)}>
          <Input
            placeholder="ex: devzgabriel"
            theme={theme}
            value={username}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => setUsername(event.target.value)}
          />

          <Button theme={theme}>Encontrar</Button>
        </Form>

        <Text theme={theme} font="paragraph">
          Por Gabriel Silva (devzgabriel)
        </Text>
      </Main>
    </Container>
  );
}

export default Landing;
