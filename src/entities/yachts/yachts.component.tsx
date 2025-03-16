import { useData } from "../../helpers/use-data.ts";
import { Box, Grid2 } from "@mui/material";
import { BasesResponse, YachtsResponse } from "../../types/types.ts";
import { useSearch } from "@tanstack/react-router";
import { SelectEntity } from "../../components/select/select.const.ts";

export const Yachts = () => {
  const yachts = useData<YachtsResponse>("yachts");
  const bases = useData<BasesResponse>("bases");

  const search: Record<SelectEntity, number[]> = useSearch({
    from: "",
  });

  return (
    <Grid2 container direction={"column"}>
      {yachts.data
        ?.map((yacht) => ({
          ...yacht,
          countryId: bases.data?.find((base) => base.id === yacht.homeBaseId)
            ?.countryId,
        }))
        .filter(
          (yacht) =>
            !!yacht.countryId &&
            (!search.baseIds || search.baseIds.includes(yacht.homeBaseId)) &&
            (!search.countryIds || search.countryIds.includes(yacht.countryId)),
        )
        .map((yacht) => <Box key={yacht.id}>{yacht.name}</Box>)}
    </Grid2>
  );
};
