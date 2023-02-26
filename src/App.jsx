// Styled Components
import { AppContainer } from "./styles/AppComponents";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
// Global Styles
import GlobalStyles from "./styles/GlobalStyles";

// Hooks
import { useTheme } from "./hooks/useTheme";

// Components
import Search from "./components/Search/Search";
import UserCard from "./components/UserCard/UserCard";
import ThemeButton from "./components/ThemeButton/ThemeButton";

// Context
import { ProfileProvider } from "./context/profileContext";

function App() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <ProfileProvider>
          <Search />
          <UserCard />
        </ProfileProvider>
        <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
