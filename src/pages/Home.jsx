import React from "react";

// Components
import Search from "../components/Search/Search";
import UserCard from "../components/UserCard/UserCard";
import ThemeButton from "../components/ThemeButton/ThemeButton";

const Home = ({ toggleTheme, isDarkTheme }) => {
  return (
    <>
      <Search />
      <UserCard />
      <ThemeButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    </>
  );
};

export default Home;
