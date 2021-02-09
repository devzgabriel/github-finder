import styled, { css } from "styled-components";

interface ContainerInterface {
  mode: string;
}

interface TextInterface {
  font?: string;
  mode: string;
}

export const Container = styled.div<ContainerInterface>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    switch (props.mode) {
      case "dark":
        return css`
          background: #141414;
        `;
      case "light":
        return css`
          background: #fff;
        `;
    }
  }}
`;

export const Text = styled.span<TextInterface>`
  font-family: "Inter", sans-serif;
  ${(props) =>
    props.font === "bold" &&
    css`
      font-weight: bold;
      font-size: 50px;
    `}
  ${(props) => {
    switch (props.mode) {
      case "dark":
        return css`
          color: #fff;
        `;
      case "light":
        return css`
          color: #111111;
        `;
    }
  }}
`;
