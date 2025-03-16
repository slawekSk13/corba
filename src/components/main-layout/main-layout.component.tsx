import { FC } from "react";
import { Grid2 } from "@mui/material";
import { Bases } from "../../entities/bases/bases.component.tsx";
import { Yachts } from "../../entities/yachts/yachts.component.tsx";
import { Countries } from "../../entities/countries/countries.component.tsx";

export const MainLayout: FC = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 container size={4} padding={1} gap={1} flexDirection={"column"}>
        <Countries />
        <Bases />
      </Grid2>
      <Grid2 size={8}>
        <Yachts />
      </Grid2>
    </Grid2>
  );
};
