import styled, { css, createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background:${(props) => props.theme.colors.background};
    font-size: 14px;
    font-family:"Inter", sans-serif;
  }
`;

interface TextInterface {
  font?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;

  background: ${(props) => props.theme.colors.background};
`;

export const Main = styled.main`
  width: 70vw;
  margin: 5rem 12vw;

  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    margin-top: 3rem;
  }
`;

export const Text = styled.span<TextInterface>`
  color: ${(props) => props.theme.colors.text};
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
          @media (max-width: 700px) {
            width: 90%;
          }
        `;
      case "paragraph":
        return css`
          margin: 9rem 0 1rem;
          font-weight: 500;
          font-size: 18px;
          @media (max-width: 700px) {
            margin: 7rem auto 1rem;
          }
        `;
      case "dark-text":
        return css`
          font-weight: 500;
          font-size: 14px;
          margin-right: 1rem;
        `;
      case "obs":
        return css`
          margin: 1rem 0 0.5rem;
          font-weight: 400;
          font-size: 18px;
        `;
    }
  }};
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;

export const ButtonSubmit = styled.button.attrs({
  type: "submit",
})`
  border: none;
  border-radius: 0 10px 10px 0;
  height: 2.8rem;
  padding: 20px;
  font: 400 1rem Poppins;
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    border-radius: 10px;
    margin-top: 1rem;
  }
`;

export const ExampleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Generic = styled(ExampleDiv)`
  width: 49%;
  justify-content: space-between;

  position: absolute;
  bottom: 2rem;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 2rem;
    position: static;
  }
`;
