import YourBookClient from "./components/client";
import BookCard from "@/components/book-card";

const YourBooksPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <YourBookClient />
        <BookCard title="test" author="test" id="test" />
      </div>
    </div>
  );
};

export default YourBooksPage;
