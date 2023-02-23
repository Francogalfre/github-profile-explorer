// Styled Components
import { Container, CardLeft, Image, Title, SocialMediaContainer, DivFlex, DivRow, Subtitle, CardRight, BlogLink, Card, Button, DescriptionContainer } from "./_Styled.js";

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
          <Title>{user.name}</Title>
          <Subtitle>@{user.login}</Subtitle>
        </div>

        <DivFlex>
          {SOCIAL_MEDIA.map((media) => (
            <SocialMediaContainer key={media.key}>
              <div>{media.icon}</div>
              <span>
                {media.text === "null" ? "No Available" : `${media.text}`}
              </span>
            </SocialMediaContainer>
          ))}
        </DivFlex>
      </CardLeft>

      <CardRight>
        <DescriptionContainer>
          <Title>Description</Title>
          <a href={user.html_url}>
            <RxGithubLogo />
          </a>
        </DescriptionContainer>

        <Subtitle>{user.bio}</Subtitle>

        <BlogLink>
          <FaLink />
          <a href={user.blog}>{user.blog === "" ? "Blog no Available" : `${user.blog}`}</a>
        </BlogLink>

        <DivRow>
          {
            PROFILE_FOLLOWS.map((card) => (
              <Card key={card.key}>
                <h1>{card.title}</h1>
                <span>{card.text}</span>
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
