// Styled Components
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

// Hooks
import { useTheme } from "./hooks/useTheme";

// Page
import Home from "./pages/Home";
import Repos from "./pages/Repos";

// Components
import ThemeButton from "./components/ThemeButton/ThemeButton"

// Context
import { ProfileProvider } from "./context/profileContext";

// React Router
import { Routes, Route } from "react-router-dom";

function App() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ProfileProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repos" element={<Repos />} />
          </Routes>
          
          <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </ProfileProvider>
    </ThemeProvider>
  );
}

export default App;
