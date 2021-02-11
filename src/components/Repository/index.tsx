import React from "react";

import {
  RepoContainer,
  GenericInfo,
  ContainerStats,
  GenericStats,
  ReposText,
  Link,
} from "./styles";

export interface RepoInterface {
  name: string;
  language: string;
  html_url: string;
  stargazers_count: number;
  forks: number;
}

export default function Repository({
  name,
  language,
  html_url: url,
  stargazers_count: stars,
  forks,
}: RepoInterface) {
  return (
    <RepoContainer>
      <GenericInfo>
        <ReposText font="name">{name}</ReposText>
        <ReposText font="language">{language}</ReposText>
      </GenericInfo>
      <ContainerStats>
        <GenericStats>
          <ReposText font="stars">Stars: {stars}</ReposText>
          <ReposText font="stars">Forks: {forks}</ReposText>
        </GenericStats>

        <Link href={url}>
          <ReposText font="link">Ver mais</ReposText>
        </Link>
      </ContainerStats>
    </RepoContainer>
  );
}
