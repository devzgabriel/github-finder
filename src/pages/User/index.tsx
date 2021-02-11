import React, { useContext, useEffect, useState } from "react";

import { Container } from "../../styles/global";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Repository, { RepoInterface } from "../../components/Repository";

import { AppContext } from "../../context/AppContext";
import { ReposSection, UserMain, ReposText } from "./styles";

import api from "../../services/api";

function User() {
  const [repos, setRepos] = useState<RepoInterface[]>([]);
  const {
    state: { user },
  } = useContext(AppContext);

  const {
    login: username,
    avatar_url,
    html_url: url,
    name,
    bio,
    public_repos,
    followers,
    following,
  } = user;

  useEffect(() => {
    const data = (async () => await api.get(`${username}/repos`).then())();
    console.log(data);
    setRepos(data as any);
  }, [username]);

  return (
    <Container id="page-user">
      <Header />
      <UserMain>
        <Card
          name={name}
          username={username}
          avatar={avatar_url}
          bio={bio}
          url={url}
          public_repos={public_repos}
          followers={followers}
          following={following}
        />

        <ReposSection>
          <ReposText>Repositórios</ReposText>

          {repos.map((repo: RepoInterface) => {
            return (
              <Repository
                key={repo.html_url}
                name={repo.name}
                language={repo.language}
                html_url={repo.html_url}
                stargazers_count={repo.stargazers_count}
                forks={repo.forks}
              />
            );
          })}
        </ReposSection>
      </UserMain>
    </Container>
  );
}

export default User;
