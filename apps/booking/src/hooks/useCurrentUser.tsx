import useAppStore from "../store";
import { useEffect } from "react";

export default function useCurrentUser() {
  const { user } = useAppStore((state) => state);

  // useEffect(() => {
  //   const interval = setInterval(() => setDate(() => new Date()), 1000);
  //   return () => clearInterval(interval);
  // }, [user]);

  return { user };
}
