import styled, { css } from 'styled-components'

interface TextInterface {
  font?: string
}

export const RepoContainer = styled.div`
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 1rem;

  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.colors.opacity};
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 1rem 0;
    width: 94vw;
  }
`

export const Generic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const GenericStats = styled(Generic)`
  @media (max-width: 1080px) {
    display: none;
  }
`
export const GenericInfo = styled(Generic)`
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
`

export const ContainerStats = styled(Generic)`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-end;
  }
`

export const ReposText = styled.span<TextInterface>`
  border: none;
  font: 400 1.2rem Poppins;

  color: ${(props) => props.theme.colors.text};

  ${(props) => {
    switch (props.font) {
      case 'name':
        return css`
          font-weight: bold;
          font-size: 20px;
        `
      case 'language':
        return css`
          margin-top: 0.3rem;
          font-weight: 400;
          font-size: 16px;
        `
      case 'stars':
        return css`
          font-weight: 400;
          font-size: 16px;
        `
      case 'link':
        return css`
          font-weight: 700;
          font-size: 16px;
          color: ${(props) => props.theme.colors.secundary};
        `
    }
  }}
`

export const Link = styled.a`
  text-decoration: none;
  width: 12rem;
  height: 2.4rem;
  padding: 0.3rem;
  margin: 0 0.6rem 0 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: ${(props) => props.theme.colors.primary};

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1080px) {
    margin: 0;
    width: 70%;
  }
  @media (max-width: 700px) {
    margin-top: 1rem;
    width: 100%;
  }
`
