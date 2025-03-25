import { useSearch } from "@tanstack/react-router";
import { SelectEntity } from "../types/filter.types.ts";

export const useAppState = () => {
  return useSearch({
    from: "",
  }) as Record<SelectEntity, number[]>;
};
