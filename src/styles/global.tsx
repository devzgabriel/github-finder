import styled, { css } from "styled-components";

interface ContainerInterface {
  mode: string;
}

export const Container = styled.div<ContainerInterface>`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #bcbcbc;

  ${(props) =>
    props.mode === "light" &&
    css`
      background: #bcbcbc;
    `}
  ${(props) =>
    props.mode === "dark" &&
    css`
      background: #252424;
    `}
`;
