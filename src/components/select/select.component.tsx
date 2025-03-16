import { Autocomplete, TextField } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { compact, isEmpty } from "lodash";
import { SelectEntity, SelectProps } from "./select.const.ts";

export function Select<T extends { id: number }>({
  entityName,
  data,
  labelKey,
  label,
  dependantEntities,
}: SelectProps<T>) {
  const navigate = useNavigate();
  const search: Record<SelectEntity, number[]> = useSearch({
    from: "",
  });

  const value = useMemo(() => search[entityName] || [], [entityName, search]);

  const handleChange = useCallback(
    (newValue: ({ value: number } | undefined)[]) => {
      navigate({
        // @ts-expect-error it works
        search: (prev: Record<SelectEntity, number[]>) => ({
          ...prev,
          [entityName]: isEmpty(newValue)
            ? undefined
            : compact(newValue).map((v) => v.value),
          ...(dependantEntities && newValue.length <= value.length
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

  const options = useMemo(
    () =>
      data?.map((entity) => ({ value: entity.id, label: entity[labelKey] })),
    [data, labelKey],
  );

  const selectValue = useMemo(
    () => value.map((id) => options.find((o) => o.value === id)),
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
