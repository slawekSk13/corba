import { useData } from "../../helpers/use-data.helper.ts";
import { BasesResponse } from "../../types/response.types.ts";

import { Select } from "../../components/select/select.component.tsx";
import { intersection } from "lodash";
import { useAppState } from "../../helpers/use-app-state.helper.ts";

export const Bases = () => {
  const { data } = useData<BasesResponse>("bases");
  const { countryIds, sailingAreas } = useAppState();

  return (
    <Select
      entityName={"baseIds"}
      data={
        data?.filter(
          (base) =>
            (!countryIds || countryIds.includes(base.countryId)) &&
            (!sailingAreas ||
              !!intersection(sailingAreas, base.sailingAreas).length),
        ) || []
      }
      labelKey={"name"}
      label={"Baza"}
    />
  );
};
