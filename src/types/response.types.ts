// Type definitions for API responses

// 1. Country type
type Country = {
  id: number;
  name: string;
  short: string;
  long: string;
  worldRegion: number;
};

// 2. WorldRegion type
type WorldRegion = {
  id: number;
  name: string;
};

// 3. Yacht type
type Yacht = {
  id: number;
  name: string;
  model: string;
  modelId: number;
  shipyardId: number;
  year: number;
  kind: string;
  certificate: string;
  homeBaseId: number;
  homeBase: string;
  companyId: number;
  company: string;
  draught: number;
  beam: number;
  length: number;
  waterCapacity: number;
  fuelCapacity: number;
  engine: string;
  deposit: number;
  currency: string;
  commissionPercentage: number;
  wc: number;
  berths: number;
  cabins: number;
  wcNote: string;
  berthsNote: string;
  cabinsNote: string;
  transitLog: number;
  mainsailArea: number;
  genoaArea: number;
  mainsailType: string;
  genoaType: string;
  requiredSkipperLicense: number;
  defaultCheckInDay: number;
  defaultCheckInTime: string;
  defaultCheckOutTime: string;
  minimumCharterDuration: number;
  maxPeopleOnBoard: number;
  images: YachtImage[];
  equipmentIds: number[];
  equipment: YachtEquipment[];
  equipmentRaw: YachtEquipmentRaw[];
  products: YachtProduct[];
  descriptions: YachtDescription[];
  crew: YachtCrew[];
};

// Yacht related sub-types
type YachtImage = {
  name: string;
  description: string;
  url: string;
  sortOrder: number;
};

type YachtEquipment = {
  value: string;
  id: number;
};

type YachtEquipmentRaw = {
  id: number;
  parentId: number;
  name: string;
  value: string;
  categoryName: string;
};

type YachtProduct = {
  name: string;
  crewedByDefault: boolean;
  isDefaultProduct: boolean;
  extras: YachtProductExtra[];
};

type YachtProductExtra = {
  id: number;
  name: string;
  obligatory: boolean;
  price: number;
  currency: string;
  unit: string;
  payableInBase: boolean;
  includedDepositWaiver: boolean;
  validDaysFrom: number;
  validDaysTo: number;
  validForBases: ValidForBase[];
  validDateFrom: string;
  validDateTo: string;
  description: string;
  availableInBase: number;
  validSailingAreas: number[];
};

type ValidForBase = {
  from: number[];
  to: number[];
};

type YachtDescription = {
  category: string;
  text: string;
  document: YachtDocument[];
};

type YachtDocument = {
  id: number;
  name: string;
  description: string;
  url: string;
  sortOrder: number;
};

type YachtCrew = {
  name: string;
  description: string;
  age: number;
  nationality: string;
  roles: string[];
  licenses: string;
  languages: string[];
  images: YachtDocument[];
};

// 4. SailingArea type
type SailingArea = {
  id: number;
  name: string;
};

// 5. Base type
type Base = {
  id: number;
  name: string;
  city: string;
  country: string;
  address: string;
  latitude: string;
  longitude: string;
  countryId: number;
  sailingAreas: number[];
};

// 6. Equipment type
type Equipment = {
  id: number;
  name: string;
};

// 7. Company type
type Company = {
  id: number;
  name: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  telephone: string;
  telephone2: string;
  mobile: string;
  vatCode: string;
  email: string;
  web: string;
  bankAccountNumber: string;
  termsAndConditions: string;
  checkoutNote: string;
  maxDiscountFromCommissionPercentage: number;
};

// 8. Shipyard type
type Shipyard = {
  id: number;
  name: string;
  shortName: string;
};

// 9. YachtType type
type YachtType = {
  name: string;
};

// API response types (arrays of each type)
export type CountriesResponse = Country[];
export type WorldRegionsResponse = WorldRegion[];
export type YachtsResponse = Yacht[];
export type SailingAreasResponse = SailingArea[];
export type BasesResponse = Base[];
export type EquipmentResponse = Equipment[];
export type CompaniesResponse = Company[];
export type ShipyardsResponse = Shipyard[];
export type YachtTypesResponse = YachtType[];
