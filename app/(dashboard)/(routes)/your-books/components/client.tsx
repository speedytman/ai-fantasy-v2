"use client";
import BookCard from "@/components/book-card";
import { Button } from "@/components/ui/button";
import { Book } from "@prisma/client";
import { useRouter } from "next/navigation";

interface YourBookClientProps {
  books: Book[];
}

const YourBookClient: React.FC<YourBookClientProps> = ({ books }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1>Your Books ({books.length})</h1>
          <p>Add or Manage your books here.</p>
        </div>
        <Button onClick={() => router.push(`/your-books/new`)}>Add New</Button>
      </div>
      <div className="grid grid-cols-3 gap-2 gap-y-8 p-4">
        {books.map((book) => (
          <div
            onClick={() => router.push(`/your-books/${book.id}`)}
            className="max-h-full max-w-ful p-0.5 rounded-lg border-2 border-white border-dotted hover:border-slate-300 hover:cursor-pointer"
          >
            <BookCard title={book.title} author={book.authorId!} id={book.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default YourBookClient;
