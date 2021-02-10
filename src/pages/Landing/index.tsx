import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { ThemeContext } from "styled-components";

import {
  Container,
  Main,
  Text,
  Form,
  ThemeSwitcher,
  Generic,
} from "../../styles/global";
import Button from "../../components/Button";
import Input from "../../components/Input";

import api from "../../services/api";
import useHandleChangeTheme from "../../hooks/usechangeTheme";

function Landing() {
  const history = useHistory();
  const [username, setUsername] = useState("");

  const { dispatch } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    dispatch({ type: "RESET_USER" });
  }, [dispatch]);

  async function searchUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username !== "") {
      try {
        //fazer requisição

        const { data } = await api.get(`${username}`).then();

        dispatch({ type: "UPDATE_USER", payload: data });
        history.push("/user");
      } catch (error) {
        setUsername("");
        alert("Erro ao encontrar usuário!");
      }
    }
    return;
  }

  return (
    <Container id="page-landing">
      <Main>
        <Text font="title">GitHub Finder</Text>
        <Text font="semi-title">
          Seu site para encontrar programadores de maneira rápida e fácil!
        </Text>
        <Text font="paragraph">Digite o nome do desenvolvedor abaixo</Text>

        <Form onSubmit={(event) => searchUser(event)}>
          <Input
            placeholder="ex: devzgabriel"
            value={username}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => setUsername(event.target.value)}
          />

          <Button>Encontrar</Button>
        </Form>

        <Generic>
          <ThemeSwitcher>
            <Text font="dark-text">Dark Mode</Text>
            <Switch
              onChange={() => {}}
              checked={false}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              onColor={colors.secundary}
              offColor={colors.primary}
              offHandleColor={colors.primary}
            />
          </ThemeSwitcher>
          <Text font="obs">Por Gabriel Silva</Text>
        </Generic>
      </Main>
    </Container>
  );
}

export default Landing;
