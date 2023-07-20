import { auth } from "@/lib/auth";
import YourBookClient from "./components/client";
import { db } from "@/lib/db";

const YourBooksPage = async () => {
  const session = await auth();
  const userId = session?.user.username;
  const books = await db.book.findMany({
    where: {
      authorId: userId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <YourBookClient books={books} />
      </div>
    </div>
  );
};

export default YourBooksPage;
