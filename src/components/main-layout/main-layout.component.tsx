import { FC } from "react";
import { Divider, Grid2, Typography } from "@mui/material";
import { Bases } from "../../entities/bases/bases.component.tsx";
import { Yachts } from "../../entities/yachts/yachts.component.tsx";
import { Countries } from "../../entities/countries/countries.component.tsx";
import { SailingAreas } from "../../entities/sailing-areas/sailing-areas.component.tsx";
import { DateRange } from "../date-range/date-range.component.tsx";
import { RangePicker } from "../range-picker/range-picker.component.tsx";

export const MainLayout: FC = () => {
  return (
    <Grid2 container spacing={2} padding={2}>
      <Grid2 container size={3} gap={1} flexDirection={"column"}>
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
          <RangePicker entityName={"length"} label={"Długość"} />
          <RangePicker entityName={"year"} label={"Rok budowy"} />
          <RangePicker
            entityName={"maxPeopleOnBoard"}
            label={"Maksymalna załoga"}
          />
          <RangePicker entityName={"cabins"} label={"Kabiny"} />
          <RangePicker entityName={"berths"} label={"Koje"} />
          <RangePicker entityName={"wc"} label={"Toalety"} />
        </Grid2>
      </Grid2>
      <Grid2 size={9}>
        <Yachts />
      </Grid2>
    </Grid2>
  );
};

//TODO: wyposażenie ToggleButton
