import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;

  background: ${(props) => props.theme.colors.opacity};
  color: ${(props) => props.theme.colors.primary};
`;

export const HomeButton = styled.button`
  background: ${(props) => props.theme.colors.opacity};
  border: none;
  height: 2.8rem;
  padding: 10px;
  font: 400 1rem Poppins;
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.primary};

  &:hover {
    opacity: 0.8;
  }
`;
