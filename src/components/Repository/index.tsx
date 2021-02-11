import React from "react";

import {
  RepoContainer,
  Generic,
  ReposText,
  Link,
  GenericScore,
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
      <Generic>
        <ReposText font="name">{name}</ReposText>
        <ReposText font="language">{language}</ReposText>
      </Generic>
      <GenericScore>
        <ReposText font="stars">Stars: {stars}</ReposText>
        <ReposText font="stars">Forks: {forks}</ReposText>
      </GenericScore>

      <Link href={url}>
        <ReposText font="link">Ver mais</ReposText>
      </Link>
    </RepoContainer>
  );
}
