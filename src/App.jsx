// Styled Components
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

// Hooks
import { useTheme } from "./hooks/useTheme";

// Page
import Home from "./pages/Home";
import Repos from "./pages/Repos";

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
          <Route path="/" element={<Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />} />
          <Route path="/repos" element={<Repos toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />} />
        </Routes>
      </ProfileProvider>
    </ThemeProvider>
  );
}

export default App;
