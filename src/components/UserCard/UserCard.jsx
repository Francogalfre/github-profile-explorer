// Styled Components
import {
  Container,
  CardLeft,
  Image,
  ProfileName,
  DivFlex,
  DivRow,
  ProfileUsername,
  SocialText,
  SocialIcons,
  CardRight,
  DescriptionTitle,
  Description,
  BlogLink,
  Card,
  CardTitle,
  CardText,
  Button,
  DescriptionContainer,
  GitLogo
} from "./_Styled.js";

// Icons
import { FaCity, FaMap, FaTwitter, FaLink } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx"

const UserCard = ({ user }) => {
  // Social Media Links
  const SOCIAL_MEDIA = [
    {
      icon: <FaMap />,
      text: `${user.location}`,
      key: 1,
    },
    {
      icon: <FaCity />,
      text: `${user.company}`,
      key: 2,
    },
    {
      icon: <FaTwitter />,
      text: `${user.twitter_username}`,
      key: 3,
    },
  ];

  // Followers Cards
  const PROFILE_FOLLOWS = [
    {
      title: 'Followers',
      text: `${user.followers}`,
      key: 1
    },
    {
      title: 'Following',
      text: `${user.following}`,
      key: 2
    },
    {
      title: 'Repositories',
      text: `${user.public_repos}`,
      key: 3
    }
  ]

  return (
    <Container>
      <CardLeft>
        <a href={user.html_url}>
          <Image src={user.avatar_url} alt={`Avatar of ${user.name}`} />
        </a>
        <div>
          <ProfileName>{user.name}</ProfileName>
          <ProfileUsername>@{user.login}</ProfileUsername>
        </div>
        <DivFlex>
          {SOCIAL_MEDIA.map((media) => (
            <DivRow key={media.key}>
              <SocialIcons>{media.icon}</SocialIcons>
              <SocialText>
                {media.text === "null" ? "No Available" : `${media.text}`}
              </SocialText>
            </DivRow>
          ))}
        </DivFlex>
      </CardLeft>

      <CardRight>
        <DescriptionContainer>
          <DescriptionTitle>Description</DescriptionTitle>
          <GitLogo href={user.html_url}>
            <RxGithubLogo />
          </GitLogo>
        </DescriptionContainer>
        <Description>{user.bio}</Description>

        <BlogLink>
          <FaLink />
          {user.blog === "" ? "Blog no Available" : `${user.blog}`}
        </BlogLink>

        <DivRow>
          {
            PROFILE_FOLLOWS.map((card) => (
              <Card key={card.key}>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </Card>
            ))
          }
        </DivRow>

        <Button>
          View Repositories
        </Button>
      </CardRight>
    </Container>
  );
};

export default UserCard;
