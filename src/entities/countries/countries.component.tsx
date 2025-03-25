import { useData } from "../../helpers/use-data.helper.ts";
import { CountriesResponse } from "../../types/response.types.ts";

import { Select } from "../../components/select/select.component.tsx";

export const Countries = () => {
  const { data } = useData<CountriesResponse>("countries");

  return (
    <Select
      entityName={"countryIds"}
      data={data || []}
      labelKey={"name"}
      label={"Kraj"}
      dependantEntities={["baseIds", "sailingAreas"]}
    />
  );
};
