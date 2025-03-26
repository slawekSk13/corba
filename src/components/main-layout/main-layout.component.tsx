import { FC } from "react";
import { Divider, Grid2, Typography } from "@mui/material";
import { Bases } from "../../entities/bases/bases.component.tsx";
import { Yachts } from "../../entities/yachts/yachts.component.tsx";
import { Countries } from "../../entities/countries/countries.component.tsx";
import { SailingAreas } from "../../entities/sailing-areas/sailing-areas.component.tsx";
import { DateRange } from "../date-range/date-range.component.tsx";
import { RangePicker } from "../range-picker/range-picker.component.tsx";
import { RangeEntity } from "../../types/filter.types.ts";
import {
  RANGE_ENTITIES,
  RANGE_FILTER_LABELS,
} from "../../entities/range-filters/range-filters.const.ts";
import { ClearButton } from "../clear-button/clear-button.component.tsx";

export const MainLayout: FC = () => {
  return (
    <Grid2 container spacing={2} padding={2}>
      <Grid2
        container
        size={3}
        gap={1}
        flexDirection={"column"}
        sx={{ position: "relative" }}
      >
        <ClearButton />
        <Grid2 container gap={1} flexDirection={"column"}>
          <Typography variant={"h6"} component={"h6"}>
            Gdzie
          </Typography>
          <Countries />
          <SailingAreas />
          <Bases />
        </Grid2>
        <Divider />
        <Grid2 container gap={1} flexDirection={"column"}>
          <Typography variant={"h6"} component={"h6"}>
            Kiedy
          </Typography>
          <DateRange />
        </Grid2>
        <Divider />
        <Grid2>
          {Object.entries(RANGE_FILTER_LABELS).map(
            ([entityName, label]) =>
              RANGE_ENTITIES.includes(entityName as RangeEntity) && (
                <RangePicker
                  entityName={entityName as RangeEntity}
                  label={label}
                  key={entityName}
                />
              ),
          )}
        </Grid2>
      </Grid2>
      <Grid2 size={9}>
        <Yachts />
      </Grid2>
    </Grid2>
  );
};

//TODO: wyposażenie ToggleButton
