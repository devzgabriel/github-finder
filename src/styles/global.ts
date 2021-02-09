import styled, { css, createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background:#f5f5f5;
    font-size: 14px;
    color:#333;
    font-family:"Inter", sans-serif;
  }
`;

interface ContainerInterface {
  mode: string;
}

interface TextInterface {
  font?: string;
  mode: string;
}

export const Container = styled.div<ContainerInterface>`
  display: flex;
  flex: 1;
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
  /* font-family: "Inter", sans-serif; */
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
