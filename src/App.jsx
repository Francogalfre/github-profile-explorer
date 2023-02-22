// React
import { useState, useEffect } from "react"

// Styled Components
import { AppContainer, Title, ThemeButton } from "./styles/AppComponents"
import { darkTheme, lightTheme } from "./styles/theme"
import { ThemeProvider } from "styled-components"

// Hooks
import { useTheme } from "./hooks/useTheme"

// Components
import Search from "./components/Search/Search"
import UserCard from "./components/UserCard/UserCard"

function App() {
  const { isDarkTheme, toggleTheme } = useTheme()
  
  const [keyword, setKeyword] = useState("Francogalfre")
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`https://api.github.com/users/${keyword}`)
      .then(response => response.json())
      .then(json => {
        setUser(json)
      })
  }, [keyword]) 

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
