import { useData } from "../../helpers/use-data.helper.ts";
import {
  BasesResponse,
  SailingAreasResponse,
} from "../../types/response.types.ts";

import { Select } from "../../components/select/select.component.tsx";
import { useAppState } from "../../helpers/use-app-state.helper.ts";
import { compact, uniq } from "lodash";

export const SailingAreas = () => {
  const { data } = useData<SailingAreasResponse>("sailingAreas");
  const { data: bases } = useData<BasesResponse>("bases");

  const { countryIds } = useAppState();

  const sailingAreas = compact(
    uniq(
      (
        bases?.filter(
          (base) => !countryIds || countryIds.includes(base.countryId),
        ) || []
      ).reduce<number[]>(
        (acc, { sailingAreas }) => [...acc, ...sailingAreas],
        [],
      ),
    ).map((id) => data?.find((sailingArea) => id === sailingArea.id)),
  );

  return (
    <Select
      entityName={"sailingAreas"}
      data={sailingAreas || []}
      labelKey={"name"}
      label={"Akwen"}
      dependantEntities={["baseIds"]}
    />
  );
};
