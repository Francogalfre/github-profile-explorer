import React from "react";

// Context
import { useContext } from "react";
import { ProfileContext } from "../context/profileContext";

// Components
import ReposCard from "../components/ReposCard/ReposCard";
import Spinner from "../components/Loading/Spinner";

// Styled Components
import { ReposContainer, Title, TitleContainer, ExitButton } from "./_Styled"

// Icons
import { RxExit } from "react-icons/rx"

const Repos = () => {
  const { repos, reposLoading } = useContext(ProfileContext);

  return (
    <ReposContainer>

      <TitleContainer>
        <ExitButton to={"/"}><RxExit /></ExitButton>
        <Title>Repositories</Title>
      </TitleContainer>

      {reposLoading ? (
        <Spinner />
      ) : (
        <>
          {
            repos.map((repo) => (
              <ReposCard key={repo.id} repo={repo} />
            ))
          }
        </>
      )}
    </ReposContainer>
  );
};

export default Repos;
