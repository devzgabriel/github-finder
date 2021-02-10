import styled, { css } from "styled-components";

export const TextInput = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px 0 0 10px;
  font: 400 1.2rem Poppins;
  width: 95%;
  ${(props) => {
    switch (props.theme) {
      case "dark":
        return css`
          background: #333;
          color: #fff;
        `;
      case "light":
        return css`
          background: #f5f5f5;
          color: #111111;
        `;
    }
  }}
`;
