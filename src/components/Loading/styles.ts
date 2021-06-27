import styled, { keyframes } from 'styled-components'

const Load = keyframes`  
  from { opacity: 1; }
  to { opacity: 0; right:-120%;}
`

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;

  /* animation-delay: 500ms; */
  animation-duration: 2500ms;
  /* animation-fill-mode: backwards;
  animation-iteration-count: 1;
  animation-direction: normal; */
  animation-fill-mode: both;
  animation-play-state: running;

  animation-name: ${Load};
`

export const Logo = styled.img`
  width: 10vw;
  margin-bottom: 2rem;
`

export const LoadText = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  font-size: 24px;
`
