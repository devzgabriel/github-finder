import styled, { css } from "styled-components";

interface TextInterface {
  font?: string;
}

export const CardContainer = styled.div`
  width: 30%;
  max-height: 82vh;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.opacity};
`;

export const CardText = styled.span<TextInterface>`
  border: none;
  font: 400 1.2rem Poppins;

  color: ${(props) => props.theme.colors.text};

  ${(props) => {
    switch (props.font) {
      case "name":
        return css`
          margin: 1rem auto 0;
          font-weight: bold;
          font-size: 26px;
        `;
      case "username":
        return css`
          margin: 0.3rem auto 0;
          font-weight: 700;
          font-size: 20px;
        `;
      case "numbers":
        return css`
          margin-top: 1.2rem;
          font-weight: 700;
          font-size: 18px;
        `;
      case "repos":
        return css`
          margin: 1rem auto 0;
          font-weight: 700;
          font-size: 18px;
        `;
      case "bio":
        return css`
          margin-top: 1.2rem;
          font-weight: 400;
          font-size: 16px;
        `;
      case "link":
        return css`
          font-weight: 700;
          font-size: 16px;
          color: ${(props) => props.theme.colors.secundary};
        `;
    }
  }}
`;

export const Generic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-evenly;
  width: 100%;

  color: ${(props) => props.theme.colors.text};
`;

export const Link = styled.a`
  text-decoration: none;
  width: 60%;
  height: 2.4rem;
  padding: 0.3rem;
  margin: 1.6rem auto 0.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: ${(props) => props.theme.colors.primary};

  &:hover {
    opacity: 0.7;
  }
`;

export const Avatar = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 20%;
  margin: 0 auto;

  background: ${(props) => props.theme.colors.secundary};
`;
