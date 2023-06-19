import React from "react";

interface ChapterProps {
  params: {
    bookId: string;
    chapterId: string;
  };
}

const Chapter = ({ params }: ChapterProps) => {
  const { bookId, chapterId } = params;
  return <div>{`Chapter ${chapterId} of Book ${bookId}`}</div>;
};

export default Chapter;
