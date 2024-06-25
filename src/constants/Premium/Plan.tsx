export type TPlan = {
  numberOfButtons: number;
  title: string;
  description: string;
  numberOfAccountsFor: string;
  facilities: TFacilities[];
  termsAndConditions: string;
};

type TFacilities = {
  facility: string;
};

const PlanData: TPlan[] = [
  {
    numberOfButtons: 1,
    title: "Mini",
    description: "From $0.07",
    numberOfAccountsFor: "1 account on mobile only",
    facilities: [
      {
        facility: "Ad-free music listening on mobile",
      },
      {
        facility: "Group Session",
      },
      {
        facility: "Download 30 songs on 1 mobile device",
      },
    ],
    termsAndConditions: "",
  },
  {
    numberOfButtons: 2,
    title: "Individual",
    description: "$1.99/month after offer period",
    numberOfAccountsFor: "1 account",
    facilities: [
      {
        facility: "Ad-free music listening",
      },
      {
        facility: "Group Session",
      },
      {
        facility: "Download 10k songs/device on 5 mobile devices",
      },
    ],
    termsAndConditions:
      "1 month free not available for users who have already tried Premium.",
  },
  {
    numberOfButtons: 2,
    title: "Duo",
    description: "$2.49/month after offer period",
    numberOfAccountsFor: "2 accounts",
    facilities: [
      {
        facility: "For couples who live together",
      },
      {
        facility: "Ad-free music listening",
      },
      {
        facility: "Group Session",
      },
      {
        facility: "Download 10k songs/device, on 5 devices per account",
      },
    ],
    termsAndConditions:
      "1 month free not available for users who have already tried Premium.",
  },
  {
    numberOfButtons: 2,
    title: "Family",
    description: "$2.99/month after offer period",
    numberOfAccountsFor: "Up to 6 accounts",
    facilities: [
      {
        facility: "For family who live together",
      },
      {
        facility: "Block explicit music",
      },
      {
        facility: "Ad-free music listening",
      },
      {
        facility: "Group Session",
      },
      {
        facility: "Download 10k songs/device on 5 devices",
      },
    ],
    termsAndConditions:
      "1 month free not available for users who have already tried Premium.",
  },
];

export default PlanData;
