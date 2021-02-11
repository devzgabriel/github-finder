import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { useHistory } from "react-router-dom";

import { ThemeContext } from "styled-components";
import { AppContext } from "../../context/AppContext";

import {
  Container,
  Text,
  Form,
  ButtonSubmit,
  ExampleDiv,
  Generic,
} from "../../styles/global";
import { BgImg, LandingMain } from "./styles";
import Input from "../../components/Input";

import bgDark from "../../assets/bgDark.svg";
import bgLight from "../../assets/bgLight.svg";

import api from "../../services/api";

function Landing() {
  const history = useHistory();
  const [username, setUsername] = useState("");

  const { state, dispatch } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  const background = state.theme === "light" ? bgLight : bgDark;

  function handleToggleTheme() {
    dispatch({ type: "UPDATE_THEME", payload: null });
  }

  async function searchUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username !== "") {
      try {
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
      <LandingMain>
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

          <ButtonSubmit>Encontrar</ButtonSubmit>
        </Form>

        <Generic>
          <ExampleDiv>
            <Text font="dark-text">Dark Mode</Text>
            <Switch
              onChange={handleToggleTheme}
              checked={state.theme === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              onColor={colors.primary}
              offColor={colors.primary}
              offHandleColor={colors.primary}
              onHandleColor={colors.primary}
            />
          </ExampleDiv>
          <Text font="obs">Por Gabriel Silva</Text>
        </Generic>
      </LandingMain>
      <BgImg src={background} />
    </Container>
  );
}

export default Landing;
