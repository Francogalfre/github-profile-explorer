// Hooks
import { createContext, useState } from "react";
import { useGetUser } from "../hooks/useGetUser";

// Context
export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const { setKeyword, user, isLoading, error } = useGetUser();

  return (
    <ProfileContext.Provider value={{ setKeyword, user, isLoading, error }}>
      {children}
    </ProfileContext.Provider>
  );
}
