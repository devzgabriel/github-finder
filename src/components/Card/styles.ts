import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16vw;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.opacity};
`;

export const CardText = styled.span`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px 0 0 10px;
  font: 400 1.2rem Poppins;
  width: 95%;

  color: ${(props) => props.theme.colors.text};
`;
