// Styled Components
import styled from "styled-components";

export const ButtonTheme = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  @media screen and (max-width: 630px) {
    padding-bottom: 20px;
  }
`

export const Icon = styled.div`
  color: ${(props) => props.theme.title};
  font-size: 24px;
`

export const Input = styled.input`
  display: none;

  &:checked ~ .switch::after {
    left: 28px;
  }
`

export const Switch = styled.label`
  display: inline-block;
  width: 55px;
  height: 30px;
  background-color: ${(props) => props.theme.title};
  border-radius: 100px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: ${(props) => props.theme.button};
    border-radius: 100px;
    top: 4px;
    left: 5px;
    transition: left 0.3s ease-in-out;
  }

`
