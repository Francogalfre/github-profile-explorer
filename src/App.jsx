// Styled Components
import { AppContainer, Title, ThemeButton } from "./styles/AppComponents"
import { darkTheme, lightTheme } from "./styles/theme"
import { ThemeProvider } from "styled-components"

// Hooks
import { useTheme } from "./hooks/useTheme"
import { useGetUser } from "./hooks/useGetUser"

// Components
import Search from "./components/Search/Search"
import UserCard from "./components/UserCard/UserCard"


function App() {
  const { isDarkTheme, toggleTheme } = useTheme()
  const { setKeyword, user } = useGetUser()

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer>
        <Title>GitFinder</Title>

        <Search setUser={setKeyword} />
        <UserCard user={user} />

        <ThemeButton onClick={toggleTheme}>
          Change to 
          {
            isDarkTheme 
              ? ' Light Mode'
              : ' Dark Mode'
          }
        </ThemeButton>
        
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
