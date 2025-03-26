import { useSearch } from "@tanstack/react-router";
import { RangeEntity, SelectEntity, Timeframe } from "../types/filter.types.ts";

export const useAppState = () => {
  return useSearch({
    from: "",
  }) as Record<SelectEntity | Timeframe, number[]> &
    Record<RangeEntity, [number, number]>;
};
