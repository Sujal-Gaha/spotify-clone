type TFacilities = {
  facility: string;
};

type TPlan = {
  numberOfButtons: number;
  title: string;
  description: string;
  numberOfAccountsFor: string;
  facilities: TFacilities[];
  termsAndConditions: string;
};

export type { TPlan };
