import { db } from "@/lib/db";
import BookForm from "./components/book-form";

interface YourBookPageProps {
  params: { bookId: string };
}

const YourBookPage: React.FC<YourBookPageProps> = async ({ params }) => {
  const book = await db.book.findUnique({
    where: {
      id: params.bookId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BookForm initialData={book} />
      </div>
    </div>
  );
};

export default YourBookPage;
