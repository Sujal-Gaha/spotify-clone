type TContent = {
  _id: number;
  image: string;
  title: string;
  description: string;
  isHovering: boolean;
};

type THomePageAllContent = {
  mainId: number;
  mainTitle: string;
  content: TContent[];
};

export default THomePageAllContent;
