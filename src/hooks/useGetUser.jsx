import { useState, useEffect } from "react"

export function useGetUser()  {
  const [keyword, setKeyword] = useState("")
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`https://api.github.com/users/${keyword}`)
      .then(response => response.json())
      .then(json => {
        setUser(json)
      })
  }, [keyword])

  return { setKeyword, user }
}