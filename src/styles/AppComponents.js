// Styled Components
import styled from "styled-components";

export const AppContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 70px 0px;
  background-color: ${(props) => props.theme.body};
`;
