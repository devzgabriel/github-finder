import React from "react";

import { RepoContainer, ReposText, Link } from "./styles";

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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ReposText font="name">{name}</ReposText>
        <ReposText font="language">{language}</ReposText>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ReposText font="stars">Stars: {stars}</ReposText>
        <ReposText font="stars">Forks: {forks}</ReposText>
      </div>

      <Link href={url}>
        <ReposText font="link">Ver mais</ReposText>
      </Link>
    </RepoContainer>
  );
}
