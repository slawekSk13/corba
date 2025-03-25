import { Autocomplete, TextField } from "@mui/material";
import { useCallback, useMemo } from "react";
import { SelectProps } from "./select.const.ts";
import { useNavigate } from "@tanstack/react-router";
import { SelectEntity } from "../../types/filter.types.ts";
import { compact, isEmpty } from "lodash";
import { useAppState } from "../../helpers/use-app-state.helper.ts";

export function Select<T extends { id: number }>({
  entityName,
  data,
  labelKey,
  label,
  dependantEntities,
}: SelectProps<T>) {
  const navigate = useNavigate();
  const search = useAppState();
  const value = useMemo(() => search[entityName] || [], [entityName, search]);

  const handleChange = useCallback(
    (newValue: ({ value: number } | undefined)[]) => {
      navigate({
        // @ts-expect-error it works
        search: (prev: Record<SelectEntity, number[]>) => {
          return {
            ...prev,
            ...(dependantEntities
              ? dependantEntities.reduce(
                  (acc, entity) => ({ ...acc, [entity]: undefined }),
                  {},
                )
              : {}),
            [entityName]: isEmpty(newValue)
              ? undefined
              : compact(newValue).map((v) => v.value),
          };
        },
      });
    },
    [dependantEntities, entityName, navigate],
  );

  const options = useMemo(
    () =>
      data?.map(
        (entity) => entity && { value: entity.id, label: entity[labelKey] },
      ),
    [data, labelKey],
  );

  const selectValue = useMemo(
    () =>
      compact(
        Array.isArray(value)
          ? value.map((id) => options.find((o) => o.value === id))
          : [options.find((o) => o.value === value)],
      ),
    [options, value],
  );

  return (
    <Autocomplete
      multiple
      id={`select-${entityName}`}
      value={selectValue}
      onChange={(_, newValue) => handleChange(newValue)}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          size="small"
          label={label}
          placeholder={label}
        />
      )}
    />
  );
}
