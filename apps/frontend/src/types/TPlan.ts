export type TFacilities = {
  facility: string;
};

export type TPlan = {
  numberOfButtons: number;
  title: string;
  description: string;
  numberOfAccountsFor: string;
  facilities: TFacilities[];
  termsAndConditions: string;
};
