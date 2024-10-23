interface IFooter {
  title: string;
  links: string[];
}

export const footerData: IFooter[] = [
  {
    title: "Company",
    links: ["About", "Jobs", "For the Record"],
  },
  {
    title: "Communities",
    links: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
  },
  {
    title: "Useful Links",
    links: ["Support", "Web Player", "Free Mobile App"],
  },
];
