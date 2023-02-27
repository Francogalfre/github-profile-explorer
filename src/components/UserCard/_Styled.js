// Styled Components
import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.section`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  text-align: start;
  padding-top: 30px;
  gap: 30px;
  transition: left 0.3s ease;

  @media screen and (max-width: 1200px) {
    gap: 0px;
  }

  @media screen and (max-width: 920px) {
    gap: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: start;
  gap: 20px;
  width: 300px;
  background-color: ${(props) => props.theme.background};
  padding: 25px 0px 25px 25px;
  border-radius: ${(props) => props.theme.radius};

  @media screen and (max-width: 1200px) {
    border-radius: ${(props) => props.theme.radius} 0px 0px
      ${(props) => props.theme.radius};
    width: 250px;
    border-right: 1px solid rgba(234, 234, 234, 0.2);
  }

  @media screen and (max-width: 920px) {
    flex-direction: row;
    width: 600px;
    gap: 25px;
    border-radius: ${(props) => props.theme.radius};
    align-items: center;
  }

  @media screen and (max-width: 630px) {
    flex-direction: column;
    width: 340px;
    gap: 25px;
    border-radius: ${(props) => props.theme.radius};
    text-align: center;
    padding: 20px 0px;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 250px;
    gap: 25px;
    border-radius: ${(props) => props.theme.radius};
    text-align: center;
    padding: 20px 0px;
  }
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 100%;

  @media screen and (max-width: 920px) {
    width: 100px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
  font-size: 25px;
  font-weight: 500;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;

  & div {
    color: ${(props) => props.theme.secondary};
    align-items: center;
    top: 2px;
    position: relative;
  }

  & span {
    color: ${(props) => props.theme.secondary};
    font-weight: 400;
    width: 230px;
    font-size: 15px;
    text-align: start;
  }

  @media screen and (max-width: 360px) {
    width: 180px;
  }
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;

  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`;

export const Subtitle = styled.span`
  color: ${(props) => props.theme.secondary};
  letter-spacing: 0.5px;
  font-weight: 300;
  width: 740px;

  @media screen and (max-width: 1200px) {
    width: 580px;
  }

  @media screen and (max-width: 920px) {
    width: 500px;
  }

  @media screen and (max-width: 630px) {
    width: 300px;
  }

  @media screen and (max-width: 360px) {
    font-weight: 8px;
    width: 200px;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: start;
  gap: 30px;
  width: 800px;
  background-color: ${(props) => props.theme.background};
  padding: 30px 30px 50px 30px;
  border-radius: ${(props) => props.theme.radius};

  @media screen and (max-width: 1200px) {
    width: 650px;
    border-radius: 0px ${(props) => props.theme.radius}
      ${(props) => props.theme.radius} 0px;
    padding: 30px 30px 30px 20px;
  }

  @media screen and (max-width: 920px) {
    width: 600px;
    gap: 25px;
    border-radius: ${(props) => props.theme.radius};
    align-items: flex-start;
    padding: 30px 30px 50px 30px;
  }

  @media screen and (max-width: 630px) {
    gap: 35px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 340px;
    border-radius: ${(props) => props.theme.radius};
    padding: 20px 0px;
  }

  @media screen and (max-width: 360px) {
    gap: 35px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 250px;
    border-radius: ${(props) => props.theme.radius};
    padding: 20px 0px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: center;

  & a {
    font-size: 30px;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.title};
    cursor: pointer;
  }

  @media screen and (max-width: 630px) {
    width: 80%;
  }
`;

export const BlogLink = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.title};

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.title};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 12px 18px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.button};

  @media screen and (max-width: 630px) {
    padding: 10px 12px;
  }

  @media screen and (max-width: 360px) {
    padding: 12px 18px;
  }

  & h1 {
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.title};

    @media screen and (max-width: 630px) {
      font-size: 13px;
    }

    @media screen and (max-width: 360px) {
      font-size: 16px;
    }
  }

  & span {
    font-weight: 500;
    font-size: 18px;
    color: ${(props) => props.theme.secondary};

    @media screen and (max-width: 630px) {
      font-size: 13px;
    }

    @media screen and (max-width: 360px) {
      font-size: 16px;
    }
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Button = styled(Link)`
  width: 250px;
  padding: 15px 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.title};
  cursor: pointer;
  border: none;
  text-decoration: none;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 360px) {
    width: 200px;
    font-size: 12px;
  }
`;
