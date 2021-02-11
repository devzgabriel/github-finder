import styled, { css } from "styled-components";

interface TextInterface {
  font?: string;
}

export const CardContainer = styled.div`
  width: 70%;
  padding: 1.5rem;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;

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
          margin-top: 1rem;
          font-weight: bold;
          font-size: 26px;
        `;
      case "username":
        return css`
          margin-top: 0.3rem;
          font-weight: 700;
          font-size: 20px;
        `;
      case "numbers":
        return css`
          margin-top: 1.2rem;
          font-weight: 400;
          font-size: 20px;
        `;
      case "repos":
        return css`
          margin-top: 1rem;
          font-weight: 400;
          font-size: 18px;
        `;
      case "bio":
        return css`
          margin-top: 0.8rem;
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
  justify-content: space-between;
  width: 95%;

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

  background: ${(props) => props.theme.colors.secundary};
`;
