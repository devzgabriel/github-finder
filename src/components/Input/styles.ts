import styled from 'styled-components'

export const TextInput = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px 0 0 10px;
  font: 400 1.2rem Poppins;
  width: 95%;

  background: ${(props) => props.theme.colors.opacity};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 700px) {
    border-radius: 10px;
  }
`
