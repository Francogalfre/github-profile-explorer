// Styled Components
import styled from "styled-components"

export const AppContainer = styled.section`
  width: 100%;
  height: 100vh; 
  text-align: center;
  padding-top: 40px;
  background-color: ${(props) => props.theme.body};
  transition: all 0.3s ease;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.title};
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  padding-bottom: 20px;
`

export const ThemeButton = styled.button`
  width: 250px;
  margin-top: 20px;
  padding: 15px 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.title};
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`