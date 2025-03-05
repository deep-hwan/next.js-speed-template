import { keepPreviousData, useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useInfiniteQueryObserver } from './useInfiniteQueryObserver';

const useTanstackQuery = () => {
  const queryClient = useQueryClient();
  return { useInfiniteQueryObserver, useQuery, useInfiniteQuery, useMutation, queryClient, keepPreviousData };
};

export { useTanstackQuery };
