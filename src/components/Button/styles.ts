import styled from "styled-components";

export const ButtonSubmit = styled.button.attrs({
  type: "submit",
})`
  background: ${(props) => props.theme.colors.background};
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
`;
