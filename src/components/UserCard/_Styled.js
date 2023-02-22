// Styled Components
import styled from "styled-components"

export const Container = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: center;
  text-align: start;
  margin: 10px 20px;
  padding-top: 30px;
  gap: 30px;
`

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
  transition: background-color 0.3s ease;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 100%;
`

export const ProfileName = styled.h1`
  color: ${(props) => props.theme.title};
  font-size: 25px;
  font-weight: 500;
  transition: color 0.3s ease;
`

export const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
`

export const ProfileUsername = styled.span`
  color: ${(props) => props.theme.secondary};
  letter-spacing: 0.5px;
  font-weight: 300;
  transition: color 0.3s ease;
`

export const SocialText = styled.span`
  color: ${(props) => props.theme.secondary};
  font-weight: 400;
  font-size: 15px;
  transition: color 0.3s ease;
`

export const SocialIcons = styled.div`
  color: ${(props) => props.theme.secondary};
  align-items: center;
  top: 2px;
  position: relative;
  transition: color 0.3s ease;
`

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: start;
  gap: 26px;
  width: 800px;
  background-color: ${(props) => props.theme.background};
  padding: 25px 0px 25px 25px;
  border-radius: ${(props) => props.theme.radius};
  transition: background-color 0.3s ease;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: center;
`

export const GitLogo = styled.a`
  font-size: 30px;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.title};
  transition: color 0.3s ease;
  cursor: pointer;
`

export const DescriptionTitle = styled.h1`
  color: ${(props) => props.theme.title};
  transition: color 0.3s ease;
  font-size: 30px;
  font-weight: 600;
`

export const Description = styled.p`
  color: ${(props) => props.theme.secondary};
  transition: color 0.3s ease;
`

export const BlogLink = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.title};
  transition: color 0.3s ease;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 12px 18px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.button};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
  transition: color 0.3s ease;
`

export const CardText = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.secondary};
  transition: color 0.3s ease;
`

export const Button = styled.button`
  width: 250px;
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