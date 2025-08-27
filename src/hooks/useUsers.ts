import useSWR from 'swr';
import type { User } from '../types/user';
import { API_BASE_URL, ENDPOINTS } from '../utils/constants';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR<User[]>(
    `${API_BASE_URL}${ENDPOINTS.USERS}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    users: data || [],
    isLoading,
    isError: error,
    mutate,
  };
};
