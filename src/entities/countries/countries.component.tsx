import { useData } from "../../helpers/use-data.ts";
import { CountriesResponse } from "../../types/types.ts";

import { Select } from "../../components/select/select.component.tsx";

export const Countries = () => {
  const { data } = useData<CountriesResponse>("countries");

  return (
    <Select
      entityName={"countryIds"}
      data={data || []}
      labelKey={"name"}
      label={"Kraj"}
      dependantEntities={["baseIds"]}
    />
  );
};
