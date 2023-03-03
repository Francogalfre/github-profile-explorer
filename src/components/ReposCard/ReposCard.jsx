import React from "react";

// Icons
import { AiFillStar, AiFillEye } from "react-icons/ai";

// Styled Components
import {
  Card,
  TitleContainer,
  Description,
  TopicsContainer,
  Topics,
} from "./_Styled";

const ReposCard = ({ repo }) => {
  const topics = repo.topics;
  const description = repo.description

  return (
    <a href={repo.html_url} style={{textDecoration: 'none'}}>
      <Card>
        <TitleContainer>
          <h3>{repo.full_name}</h3>
          <div>
            <div>
              <span>{repo.stargazers_count}</span>
              <AiFillStar />
            </div>
            <div>
              <span>{repo.watchers_count}</span>
              <AiFillEye />
            </div>
          </div>
        </TitleContainer>

        <Description>
          {
            description
              ? repo.description
              : 'No Description'
          }
        </Description>

        <TopicsContainer>
          {topics.map((topic) => (
            <Topics key={topic}>
              <span>{topic}</span>
            </Topics>
          ))}
        </TopicsContainer>
      </Card>
    </a>
  );
};

export default ReposCard;
