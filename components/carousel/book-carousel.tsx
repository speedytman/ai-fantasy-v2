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

const TEST_BOOKS = [
  {
    title: "Book 1",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 2",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 3",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 4",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 5",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 6",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 7",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 8",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 9",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 10",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 11",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 12",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 13",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 14",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 15",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
  {
    title: "Book 16",
    author: "Test Author A",
    description:
      "They floated in the puppet place had been a subunit of Freeside’s security system. Still it was a long strange way home over the black water and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. They floated in the human system. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. The Sprawl was a square of faint light. Still it was a steady pulse of pain midway down his spine",
    image_path: "/images/all_of_me_image.jpg",
  },
];

const BookCarousel: React.FC<BookCarouselProps> = ({ bookList, title }) => {
  const [scroll, setScroll] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(300 + 8);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalCards = TEST_BOOKS.length;

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
            {TEST_BOOKS.map((book, index) => {
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
                          author={book.author}
                          id={book.title}
                        />
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="right"
                    sideOffset={5}
                    align="start"
                    className="h-96 w-fit"
                  >
                    {book.title}
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
