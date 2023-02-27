// React Query
import { useQuery } from '@tanstack/react-query'

// Axios
import axios from 'axios'

export function useGetRepos(keyword) {
  const fetchFn = () => axios.get(`https://api.github.com/users/${keyword}/repos`).then(res => res.data)

  const { data, isLoading } = useQuery({
    queryKey: ['userRepos', keyword],
    queryFn: fetchFn,
    enabled: keyword !== "",
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return { 
    repos: data || [],
    reposLoading: isLoading
  };
}