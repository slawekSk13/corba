import { useData } from "../../helpers/use-data.ts";
import { BasesResponse } from "../../types/types.ts";

import { Select } from "../../components/select/select.component.tsx";
import { useSearch } from "@tanstack/react-router";

export const Bases = () => {
  const { data } = useData<BasesResponse>("bases");
  const { countryIds } = useSearch({
    from: "",
  });
  return (
    <Select
      entityName={"baseIds"}
      data={
        data?.filter(
          (base) => !countryIds || countryIds?.includes(base.countryId),
        ) || []
      }
      labelKey={"name"}
      label={"Baza"}
    />
  );
};
