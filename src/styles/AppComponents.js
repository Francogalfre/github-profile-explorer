// Styled Components
import styled from "styled-components"

export const AppContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 70px 0px;
  background-color: ${(props) => props.theme.body};
`

export const Title = styled.h2`
  color: ${(props) => props.theme.title};
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 1px;
  padding-bottom: 25px;
`

export const ThemeButton = styled.button`
  width: 250px;
  margin-top: 30px;
  padding: 15px 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.title};
  cursor: pointer;
  border: none;

  &:hover {
    transform: translateY(-2px);
  }
`