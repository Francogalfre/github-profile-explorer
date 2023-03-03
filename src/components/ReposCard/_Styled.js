// Styled Components
import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 500px;
  text-align: start;
  border-radius: ${(props) => props.theme.radius};
  padding: 25px 18px;
  cursor: pointer;
  margin-bottom: 25px;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 550px) {
    width: 360px;
  }

  @media screen and (max-width: 390px) {
    width: 250px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  & h3 {
    color: ${(props) => props.theme.title};
    font-weight: 600;

    @media screen and (max-width: 550px) {
      font-size: 16px;
    }
  }

  & div {
    display: flex;
    gap: 3px;
    align-items: center;
    padding-left: 15px;
    color: ${(props) => props.theme.title};

    @media screen and (max-width: 390px) {
      padding-left: 0px;
      padding-top: 5px;
      padding-right: 10px;
    }
  }

  @media screen and (max-width: 390px) {
    display: block;
    text-align: start;
    justify-content: start;
  }
`

export const Description = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${(props) => props.theme.secondary};
`

export const TopicsContainer = styled.div`
  display: flex;
  gap: 15px;
  padding-right: 18px;
  flex-wrap: wrap;
`

export const Topics = styled.div`
  background-color: ${(props) => props.theme.button};
  padding: 10px 15px;
  border-radius: ${(props) => props.theme.radius};

  & span {
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    color: ${(props) => props.theme.title};

    @media screen and (max-width: 550px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 10px 15px;
  }

`