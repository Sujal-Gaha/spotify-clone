export type TContent = {
  _id: number;
  image: string;
  title: string;
  description: string;
  isHovering: boolean;
};

export type THomePageAllContent = {
  mainId: number;
  mainTitle: string;
  content: TContent[];
};
