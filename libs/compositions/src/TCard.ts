export type TCard = {
  _id: number;
  image: string;
  title: string;
  description: string;
};

export type TCardContainer = {
  id: number;
  mainTitle: string;
  content: TCard[];
};
