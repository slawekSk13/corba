export type SelectProps<T extends { id: number }> = {
  entityName: SelectEntity;
  data: T[];
  labelKey: keyof T;
  label: string;
  dependantEntities?: SelectEntity[];
};

export type SelectEntity = "baseIds" | "countryIds";
