import styled, { css } from "styled-components";

// export const Container = styled.div`
//   width: 30%;
//   @media (max-width: 700px) {
//     width: 100%;
//   }
// `;

export const ButtonSubmit = styled.button.attrs({
  type: "submit",
})`
  background: ${(props) => props.theme};
  border: none;
  border-radius: 0 10px 10px 0;
  height: 2.8rem;
  padding: 20px;
  font: 400 1rem Poppins;
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.theme) {
      case "dark":
        return css`
          background: #d5d5d5;
          color: #111111;
        `;
      case "light":
        return css`
          background: #141414;
          color: #fff;
        `;
    }
  }}

  &:hover {
    opacity: 0.8;
  }
`;
