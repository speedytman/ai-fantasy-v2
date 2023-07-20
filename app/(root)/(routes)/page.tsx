import BookCarousel from "@/components/carousel/book-carousel";
import Hero from "@/components/hero/hero";
import { db } from "@/lib/db";

const RootPage = async () => {
  const newArrivals = await db.book.findMany({
    take: 10,
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  return (
    <div className="h-full">
      <Hero />
      <div className="h-fit w-full flex flex-col itmes-start">
        <BookCarousel bookList={newArrivals} title="New Arrivals" />
      </div>
    </div>
  );
};

export default RootPage;
