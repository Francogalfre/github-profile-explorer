// Styled Components
import styled from "styled-components";

export const ThemeBTN = styled.button`
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
`;
