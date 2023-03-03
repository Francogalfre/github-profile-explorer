// Styled Components
import styled from "styled-components";

// React Router
import { Link } from "react-router-dom";

export const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  padding-top: 30px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 15px;
`

export const ExitButton = styled(Link)`
  rotate: 180deg;
  font-size: 20px;
  color: ${(props) => props.theme.title};
  &:hover {
    transform: translateY(2px);
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
  font-size: 30px;
  font-weight: 600;
`

export const Loading = styled.div`
  position: relative;
  left: 25%;
`





