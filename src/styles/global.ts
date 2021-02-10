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
    font-family:"Inter", sans-serif;
  }
`;

interface ContainerInterface {
  theme: string;
}

interface TextInterface {
  font?: string;
  theme: string;
}

export const Container = styled.div<ContainerInterface>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  ${(props) => {
    switch (props.theme) {
      case "dark":
        return css`
          background: #141414;
        `;
      case "light":
        return css`
          background: #fff;
        `;
    }
  }};
`;

export const Main = styled.main`
  width: 70vw;
  margin: 5rem 13vw;

  display: flex;
  flex-direction: column;
`;

export const Text = styled.span<TextInterface>`
  ${(props) => {
    switch (props.theme) {
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
  ${(props) => {
    switch (props.font) {
      case "title":
        return css`
          font-weight: bold;
          font-size: 70px;
        `;
      case "semi-title":
        return css`
          width: 50%;
          margin-top: 1.2rem;
          font-weight: 400;
          font-size: 24px;
        `;
      case "paragraph":
        return css`
          /* width: 80%; */
          margin: 9rem 0 1.3rem;
          font-weight: 500;
          font-size: 18px;
        `;
    }
  }}
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
`;

export const ThemeSwitcher = styled.button``;
