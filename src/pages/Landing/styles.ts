import styled from 'styled-components'

export const BgImg = styled.img`
  width: 45vw;
  position: fixed;
  right: -23%;
  top: 4vw;
  @media (max-width: 800px) {
    right: 200%;
  }
`

export const LandingMain = styled.main`
  width: 70vw;
  margin: 5rem 12vw;

  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    margin-top: 3rem;
  }
`
