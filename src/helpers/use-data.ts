import { useQuery } from "@tanstack/react-query";
import { getData } from "./get-data.ts";

export function useData<T>(path: string) {
  return useQuery<T>({
    queryKey: [path],
    queryFn: () => getData(path),
  });
}
