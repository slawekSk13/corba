import { useData } from "../../helpers/use-data.helper.ts";
import { BasesResponse, YachtsResponse } from "../../types/response.types.ts";
import { intersection } from "lodash";
import { useAppState } from "../../helpers/use-app-state.helper.ts";

export const useYachts = () => {
  const yachts = useData<YachtsResponse>("yachts");
  const bases = useData<BasesResponse>("bases");

  const { baseIds, countryIds, sailingAreas } = useAppState();

  return (
    yachts.data
      ?.map((yacht) => {
        const yachtBase = bases.data?.find(
          (base) => base.id === yacht.homeBaseId,
        );
        return {
          ...yacht,
          countryId: yachtBase?.countryId,
          sailingAreas: yachtBase?.sailingAreas,
        };
      })
      .filter(
        (yacht) =>
          !!yacht.countryId &&
          !!yacht.sailingAreas &&
          (!baseIds || baseIds.includes(yacht.homeBaseId)) &&
          (!countryIds || countryIds.includes(yacht.countryId)) &&
          (!sailingAreas ||
            !!intersection(sailingAreas, yacht.sailingAreas).length),
      ) || []
  );
};
