import { useNavigate, useSearch } from "@tanstack/react-router";
import { FilterEntity, RangeEntity } from "../../types/filter.types.ts";
import { useCallback } from "react";
import { Box, Slider, Typography } from "@mui/material";
import { useData } from "../../helpers/use-data.helper.ts";
import { YachtsResponse } from "../../types/response.types.ts";
import { isEqual } from "lodash";

export const RangePicker = ({
  entityName,
  label,
}: {
  entityName: RangeEntity;
  label: string;
}) => {
  const navigate = useNavigate();
  const search: Record<RangeEntity, [number, number]> = useSearch({
    from: "",
  });

  const { data: yachts } = useData<YachtsResponse>("yachts");
  const allValues = yachts?.map((yacht) => yacht[entityName]) || [];
  const extremeValues = [Math.min(...allValues), Math.max(...allValues)];

  const handleChange = useCallback(
    (newValue: [number, number] | undefined) => {
      navigate({
        // @ts-expect-error it works
        search: (prev: Record<FilterEntity, number[] | number>) => ({
          ...prev,
          [entityName]: newValue,
        }),
      });
    },
    [entityName, navigate],
  );

  return (
    <>
      <Typography variant={"body1"} component={"p"}>
        {label}
      </Typography>
      <Box sx={{ paddingInline: "10px" }}>
        <Slider
          getAriaLabel={() => label}
          value={search[entityName] ?? extremeValues}
          onChange={({ target }) => {
            if (target && "value" in target) {
              handleChange(
                isEqual(target.value, extremeValues)
                  ? undefined
                  : (target.value as [number, number]),
              );
            }
          }}
          valueLabelDisplay="auto"
          getAriaValueText={() => label}
          min={extremeValues.at(0)}
          max={extremeValues.at(-1)}
        />
      </Box>
    </>
  );
};
