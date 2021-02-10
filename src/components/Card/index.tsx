import React from "react";
import { Text } from "../../styles/global";

import { CardContainer, CardText } from "./styles";

interface InputInterface {
  name: string;
  username: string;
  avatar: string;
  bio: string;
}

export default function Input({ name, username, avatar, bio }: InputInterface) {
  return (
    <CardContainer>
      <CardText> {name} </CardText>
      <CardText> {username} </CardText>
    </CardContainer>
  );
}
