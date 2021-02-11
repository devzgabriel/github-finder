import React from "react";
import { CardContainer, Generic, Avatar, CardText, Link } from "./styles";

interface CardInterface {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  url: string;
  public_repos: number;
  followers: number;
  following: number;
}
export default function Input({
  name,
  username,
  avatar,
  bio,
  url,
  public_repos,
  followers,
  following,
}: CardInterface) {
  return (
    <CardContainer>
      <Avatar src={avatar} alt={name} />
      <CardText font="name">{name}</CardText>
      <CardText font="username">@{username}</CardText>

      <Generic>
        <CardText font="numbers">Followers: {followers}</CardText>
        <CardText font="numbers">Following: {following}</CardText>
      </Generic>

      <CardText font="repos">Reposittórios públicos: {public_repos}</CardText>
      <CardText font="bio">{bio}</CardText>
      <Link href={url}>
        <CardText font="link">Ver Perfil</CardText>
      </Link>
    </CardContainer>
  );
}
