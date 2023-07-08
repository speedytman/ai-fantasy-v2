interface ChapterPageProps {
  params: { bookId: string; chapterId: string };
}

const ChapterPage: React.FC<ChapterPageProps> = ({ params }) => {
  const { bookId, chapterId } = params;
  return (
    <div>
      Book: {bookId} Chapter: {chapterId}
    </div>
  );
};

export default ChapterPage;
