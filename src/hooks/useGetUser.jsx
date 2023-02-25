import { useState, useEffect } from "react";

export function useGetUser() {
  const [keyword, setKeyword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.github.com/users/${keyword}`)
      const returnedUser = await res.json()
      setUser(returnedUser)
    })()
  }, [keyword]);

  return { setKeyword, user };
}
