// Styled Components
import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
`

export const Input = styled.input`
  background: transparent;
  padding: 5px 13px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.title};
  transition: all 0.3s ease;

  &:focus-visible {
    border: 1px solid #ccc;
    outline: none;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`

export const Button = styled.button`
  display: flex;
  border: none;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.button};
  padding: 5px 13px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`