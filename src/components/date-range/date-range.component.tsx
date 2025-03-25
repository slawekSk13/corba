import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { FilterEntity, Timeframe } from "../../types/filter.types.ts";
import { useCallback } from "react";

export const DateRange = () => {
  const navigate = useNavigate();
  const search: Record<Timeframe, number> = useSearch({
    from: "",
  });
  const { from, to } = search;

  const handleChange = useCallback(
    (timeframe: Timeframe, newValue: number | undefined) => {
      navigate({
        // @ts-expect-error it works
        search: (prev: Record<FilterEntity, number[] | number>) => ({
          ...prev,
          [timeframe]: newValue,
        }),
      });
    },
    [navigate],
  );

  return (
    <>
      <DatePicker
        label="Od"
        value={from ? dayjs.unix(from as number) : null}
        onChange={(newValue) => handleChange("from", newValue?.unix())}
      />
      <DatePicker
        label="Do"
        value={to ? dayjs.unix(to as number) : null}
        onChange={(newValue) => handleChange("to", newValue?.unix())}
      />
    </>
  );
};
