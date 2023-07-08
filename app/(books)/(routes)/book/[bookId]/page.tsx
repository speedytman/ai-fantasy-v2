interface BookPageProps {
  params: { bookId: string };
}

const BookPage: React.FC<BookPageProps> = ({ params }) => {
  const { bookId } = params;
  return <div>BookPage: {bookId}</div>;
};

export default BookPage;
