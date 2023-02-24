// Hooks
import { createContext } from "react";
import { useGetUser } from "../hooks/useGetUser";

// Context
export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const { setKeyword, user } = useGetUser();

  return (
    <ProfileContext.Provider value={{ setKeyword, user }}>
      {children}
    </ProfileContext.Provider>
  );
}
