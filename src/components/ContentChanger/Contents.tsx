import React from "react";
import Content from "./Content";
import { TContentData } from "@/types/TContentData";

interface ContentsProps {
  contentData: TContentData[];
}

const Contents: React.FC<ContentsProps> = ({ contentData }) => {
  return (
    <>
      {contentData.map((content) => (
        <Content key={content.id} title={content.title} link={content.path} />
      ))}
    </>
  );
};

export default Contents;
