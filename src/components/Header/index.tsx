import React from "react";
import { Link } from "react-router-dom";
import { Text, ThemeSwitcher } from "../../styles/global";

import { Header } from "./styles";

export default function Button() {
  return (
    <Header>
      <Link to="/">
        <Text>GitHub Finder</Text>
      </Link>
      <ThemeSwitcher />
    </Header>
  );
}
