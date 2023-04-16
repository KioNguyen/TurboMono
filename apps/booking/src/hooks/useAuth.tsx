import useAppStore from "../store";
import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

export default function useAuth({
  email,
  password,
}: {
  email?: string;
  password?: string;
}) {
  const { setUser } = useAppStore((state) => state);
  const { data, isLoading, error, mutate } = useSWR("/users/1", {
    keepPreviousData: false,
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });
  console.log("login ... : ", data, isLoading);

  useEffect(() => {
    if (data?.email) {
      data.isLoggedIn = true;
      setUser(data);
    }
    return () => {};
  }, [data]);

  return {
    data,
    isLoading,
    mutate,
  };
}
