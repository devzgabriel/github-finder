import React, { useContext } from "react";

import { LoadingContainer, Logo, LoadText } from "./styles";
import bgDark from "../../assets/bgDark.svg";
import bgLight from "../../assets/bgLight.svg";
import { AppContext } from "../../context/AppContext";

export default function Loading() {
  const { state } = useContext(AppContext);

  const background = state.theme === "light" ? bgLight : bgDark;

  return (
    <LoadingContainer>
      <Logo src={background} />
      <LoadText>Aguarde um instante...</LoadText>
    </LoadingContainer>
  );
}
