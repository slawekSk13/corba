import { Box, Grid2 } from "@mui/material";
import { useYachts } from "./yachts.helper.ts";

export const Yachts = () => {
  const yachts = useYachts();
  return (
    <Grid2 container direction={"column"}>
      {yachts.map((yacht) => (
        <Box key={yacht.id}>{yacht.name}</Box>
      ))}
    </Grid2>
  );
};
