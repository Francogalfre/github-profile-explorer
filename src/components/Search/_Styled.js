// Styled Components
import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => props.theme.title};
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 1px;
  padding-bottom: 25px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  width: 100%;
  height: 40px;
  gap: 15px;
`;

export const Input = styled.input`
  background: transparent;
  padding: 5px 12px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.title};

  &:focus-visible {
    border: 1px solid #ccc;
    outline: none;
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 420px) {
    width: 200px;
  }
`;

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

  &:hover {
    transform: translateY(-2px);
  }
`;
