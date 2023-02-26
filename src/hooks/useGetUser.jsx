// React
import { useState } from "react";

// React Query
import { useQuery } from '@tanstack/react-query'

// Axios
import axios from 'axios'

// Mocks
import emptyUser from "../mocks/emptyUser.json"

export function useGetUser() {
  const [keyword, setKeyword] = useState("");

  const fetchFn = () => axios.get(`https://api.github.com/users/${keyword}`).then(res => res.data)

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['userProfile', keyword],
    queryFn: fetchFn,
    enabled: keyword !== "",
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  })

  return { setKeyword, user: data || emptyUser, isLoading, error, isError };
}
