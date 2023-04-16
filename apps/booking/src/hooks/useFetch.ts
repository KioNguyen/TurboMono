import useAppStore from "../store";
import useSWR from "swr";

export function useFetch(link: string) {
  const getData = useAppStore((state) => state.getData);
  const { data, isLoading, error } = useSWR(link, getData, {
    keepPreviousData: true,
  });

  return {
    data,
    isLoading,
    isError: error,
  };
}
