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

  const { data, isFetching, error, isError, isInitialLoading } = useQuery({
    queryKey: ['userProfile', keyword],
    queryFn: fetchFn,
    enabled: keyword !== "",
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return { 
    setKeyword, 
    user: data || emptyUser, 
    isFetching, 
    isInitialLoading, 
    error, 
    isError 
  };
}
