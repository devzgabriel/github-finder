import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.colors.opacity};
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`

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
`
