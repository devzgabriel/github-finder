import styled from 'styled-components'

interface TextInterface {
  font?: string
}

export const UserMain = styled.div`
  width: 95vw;
  margin: 40px auto;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ReposSection = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ReposText = styled.span<TextInterface>`
  border: none;
  font: 400 1.2rem Poppins;

  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 26px;

  color: ${(props) => props.theme.colors.text};
`
