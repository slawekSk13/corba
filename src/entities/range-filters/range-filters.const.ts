import { RangeEntity } from "../../types/filter.types.ts";

export const RANGE_FILTER_LABELS: Record<RangeEntity, string> = {
  length: "Długość",
  year: "Rok budowy",
  maxPeopleOnBoard: "Maksymalna załoga",
  cabins: "Kabiny",
  berths: "Koje",
  wc: "Toalety",
};

export const RANGE_ENTITIES: RangeEntity[] = [
  "length",
  "wc",
  "year",
  "maxPeopleOnBoard",
  "cabins",
  "berths",
];
