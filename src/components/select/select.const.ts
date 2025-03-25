import { SelectEntity } from "../../types/filter.types.ts";

export type SelectProps<T extends { id: number }> = {
  entityName: SelectEntity;
  data: T[];
  labelKey: keyof T;
  label: string;
  dependantEntities?: SelectEntity[];
};
