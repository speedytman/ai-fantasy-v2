import BookCarousel from "@/components/carousel/book-carousel";
import Hero from "@/components/hero/hero";

const RootPage = () => {
  return (
    <div className="h-full">
      <Hero />
      <BookCarousel />
    </div>
  );
};

export default RootPage;
