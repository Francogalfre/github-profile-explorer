// Hooks
import { createContext } from "react";
import { useGetUser } from "../hooks/useGetUser";

// Global Styles
import GlobalStyles from "../styles/GlobalStyles";

// Context
export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const { setKeyword, user, error, isFetching, isInitialLoading } = useGetUser();

  return (
    <ProfileContext.Provider value={{ setKeyword, user, error, isFetching, isInitialLoading, setQuery, repos }}>
      <GlobalStyles />
      {children}
    </ProfileContext.Provider>
  );
}
