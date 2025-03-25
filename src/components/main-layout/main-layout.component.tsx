import { FC } from "react";
import { Divider, Grid2, Typography } from "@mui/material";
import { Bases } from "../../entities/bases/bases.component.tsx";
import { Yachts } from "../../entities/yachts/yachts.component.tsx";
import { Countries } from "../../entities/countries/countries.component.tsx";
import { SailingAreas } from "../../entities/sailing-areas/sailing-areas.component.tsx";
import { DateRange } from "../date-range.component.tsx";

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
      </Grid2>
      <Grid2 size={9}>
        <Yachts />
      </Grid2>
    </Grid2>
  );
};

//TODO: wyposażenie ToggleButton
