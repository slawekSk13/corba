import { useQuery } from "@tanstack/react-query";
import { getData } from "./get-data.ts";
import { Endpoint } from "../types/endpoints.types.ts";

export function useData<T>(path: Endpoint) {
  return useQuery<T>({
    queryKey: [path],
    queryFn: () => getData(path),
  });
}
