// Context
import { useContext } from "react";
import { ProfileContext } from "../context/profileContext";

// Components
import ReposCard from "../components/ReposCard/ReposCard";
import Spinner from "../components/Loading/Spinner";
import ThemeButton from "../components/ThemeButton/ThemeButton";

// Styled Components
import { ReposContainer, Title, TitleContainer, ExitButton, Loading } from "./_Styled";

// Icons
import { RxExit } from "react-icons/rx";

const Repos = ({ toggleTheme, isDarkTheme }) => {
  const { repos, reposLoading } = useContext(ProfileContext);

  return (
    <>
      <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <ReposContainer>
        <TitleContainer>
          <ExitButton to={"/"}>
            <RxExit />
          </ExitButton>
          <Title>Repositories</Title>
        </TitleContainer>

        {reposLoading ? (
          <Loading><Spinner /></Loading>
        ) : (
          <>
            {repos.map((repo) => (
              <ReposCard key={repo.id} repo={repo} />
            ))}
          </>
        )}
      </ReposContainer>
    </>
  );
};

export default Repos;
