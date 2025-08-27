import useSWR from 'swr';
import type { User } from '../types/user';
import { API_BASE_URL, ENDPOINTS } from '../utils/constants';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useUser = (userId: string | undefined) => {
  const { data, error, isLoading } = useSWR<User>(
    userId ? `${API_BASE_URL}${ENDPOINTS.USERS}/${userId}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
