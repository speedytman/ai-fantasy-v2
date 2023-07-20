"use client";

import { Book } from "@prisma/client";
import BookCard from "@/components/book-card";
import { useEffect, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface BookCarouselProps {
  bookList: Book[];
  title: string;
}

const BookCarousel: React.FC<BookCarouselProps> = ({ bookList, title }) => {
  const [scroll, setScroll] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(300 + 8);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalCards = bookList.length;

  useEffect(() => {
    if (carouselRef && carouselRef.current) {
      setCarouselWidth(
        carouselRef.current.offsetWidth -
          (carouselRef.current.offsetWidth % cardWidth)
      );
    }
    function handleResize() {
      if (carouselRef && carouselRef.current) {
        setCarouselWidth(
          carouselRef.current.offsetWidth -
            (carouselRef.current.offsetWidth % cardWidth)
        );
      }
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <h1 className="px-6 text-4xl cursor-default">{title}</h1>
      <Separator className="mx-6 my-2 w-11/12" />
      <div className="h-fit w-full flex items-center justify-center p-4">
        <div
          ref={carouselRef}
          className="h-[350px] w-full group overflow-hidden relative"
        >
          {/* Left Button */}
          <div
            onClick={() => {
              setScroll((prevState) => {
                if (prevState + carouselWidth > 0) {
                  if (prevState !== 0) {
                    return 0;
                  } else {
                    return -(totalCards * cardWidth - carouselWidth);
                  }
                }
                return prevState + carouselWidth;
              });
            }}
            className="absolute left-0 -top-8 p-2 z-10 h-full w-fit"
          >
            <div className="h-full w-full flex justify-center items-center">
              <FaChevronCircleLeft
                className="absolute z-10 text-slate-500/30 rounded-full shadow-sm group-hover:text-slate-500 hover:cursor-pointer transition-colors"
                size={35}
                title="Scroll Carousel Left"
              />
              <div className="group-hover:bg-white transition-opacity h-6 w-6" />
            </div>
          </div>
          {/* Right Button */}
          <div
            onClick={() => {
              setScroll((prevState) => {
                if (prevState === -(totalCards * cardWidth - carouselWidth))
                  return 0;
                if (
                  prevState - carouselWidth >
                  -(totalCards * cardWidth - carouselWidth)
                ) {
                  return prevState - carouselWidth;
                }
                return -(totalCards * cardWidth - carouselWidth);
              });
            }}
            className="absolute right-0 -top-8 p-2 z-10 h-full w-fit"
          >
            <div className="h-full w-full flex justify-center items-center">
              <FaChevronCircleRight
                className="absolute z-10 text-slate-500/30 rounded-full shadow-sm group-hover:text-slate-500 hover:cursor-pointer"
                size={35}
                title="Scroll Carousel Right"
              />
              <div className="bg-white/0 group-hover:bg-white transition-opacity h-6 w-6" />
            </div>
          </div>
          {/* Carousel Items */}
          <div className="h-full w-fit flex flex-grow gap-2 px-2 overflow-hidden">
            {bookList.map((book, index) => {
              return (
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div
                      key={index}
                      className={"min-h-[450px] min-w-[300px] relative"}
                      style={{
                        translate: `${scroll}px`,
                        transition: "translate 1s",
                      }}
                    >
                      <div>
                        <BookCard
                          title={book.title}
                          author={book.authorId!}
                          id={book.title}
                        />
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="right"
                    sideOffset={5}
                    align="start"
                    className="h-64 w-fit"
                  >
                    <div className="h-full flex flex-col items-center">
                      <h1 className="text-2xl font-bold">{book.title}</h1>
                      <Separator />

                      <p className="text-md">{book.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCarousel;
