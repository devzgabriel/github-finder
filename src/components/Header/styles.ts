import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
`;
