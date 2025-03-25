import { useNavigate, useSearch } from "@tanstack/react-router";
import { useCallback, useMemo } from "react";
import { compact, isEmpty } from "lodash";
import { FilterEntity } from "../types/filter.types.ts";

export const useChange = (
  entityName: FilterEntity,
  dependantEntities?: FilterEntity[],
) => {
  const navigate = useNavigate();
  const search: Record<FilterEntity, number[] | number> = useSearch({
    from: "",
  });

  const value = useMemo(() => search[entityName] || [], [entityName, search]);

  const handleChange = useCallback(
    (newValue: ({ value: number } | undefined)[] | number | undefined) => {
      navigate({
        // @ts-expect-error it works
        search: (prev: Record<FilterEntity, number[] | number>) => ({
          ...prev,
          [entityName]: isEmpty(newValue)
            ? undefined
            : Array.isArray(newValue)
              ? compact(newValue).map((v) => v.value)
              : newValue,
          ...(dependantEntities &&
          Array.isArray(newValue) &&
          Array.isArray(value) &&
          (newValue.length <= value.length || !value.length)
            ? dependantEntities.reduce(
                (acc, entity) => ({ ...acc, [entity]: undefined }),
                {},
              )
            : {}),
        }),
      });
    },
    [dependantEntities, entityName, navigate, value],
  );
  return { value, handleChange };
};
