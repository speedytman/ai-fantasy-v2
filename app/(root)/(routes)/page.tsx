import BookCard from "@/components/book-card";
import BookCarousel from "@/components/carousel/book-carousel";
import Hero from "@/components/hero/hero";

const RootPage = () => {
  return (
    <div className="h-full">
      <Hero />
      <div className="h-fit w-full flex flex-col itmes-start">
        <BookCarousel title="Carousel Title" />
        <BookCarousel title="Carousel Title" />
        <BookCarousel title="Carousel Title" />
        <BookCarousel title="Carousel Title" />
        <BookCarousel title="Carousel Title" />
        <BookCarousel title="Carousel Title" />
      </div>
    </div>
  );
};

export default RootPage;
