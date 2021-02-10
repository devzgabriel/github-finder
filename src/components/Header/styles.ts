import styled, { css } from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => {
    switch (props.theme) {
      case "dark":
        return css`
          background: #111111;
          color: #d5d5d5;
        `;
      case "light":
        return css`
          background: #f5f5f5;
          color: #141414;
        `;
    }
  }}
`;
