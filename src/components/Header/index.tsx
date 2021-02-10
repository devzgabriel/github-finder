import React from "react";
import { Link } from "react-router-dom";
import { Text, ThemeSwitcher } from "../../styles/global";

import { Header } from "./styles";

interface HeaderInterface {
  theme: string;
}

export default function Button({ theme }: HeaderInterface) {
  return (
    <Header theme={theme}>
      <Link to="/">
        <Text theme={theme}>GitHub Finder</Text>
      </Link>
      <ThemeSwitcher />
    </Header>
  );
}
