// Hooks
import { createContext, useState } from "react";
import { useGetUser } from "../hooks/useGetUser";

// Context
export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const { setKeyword, user, error, isFetching, isInitialLoading } = useGetUser();

  return (
    <ProfileContext.Provider value={{ setKeyword, user, error, isFetching, isInitialLoading }}>
      {children}
    </ProfileContext.Provider>
  );
}
