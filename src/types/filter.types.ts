import { YachtsResponse } from "./response.types.ts";

export type SelectEntity = "baseIds" | "countryIds" | "sailingAreas";
export type Timeframe = "to" | "from";
export type RangeEntity = Extract<
  keyof YachtsResponse[number],
  "length" | "wc" | "year" | "maxPeopleOnBoard" | "cabins" | "berths"
>;

export type FilterEntity = SelectEntity | Timeframe | RangeEntity;
