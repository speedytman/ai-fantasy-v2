"use client";

import { Book } from "@prisma/client";
import BookCard from "../book-card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
  const [offset, setOffset] = useState<number>(0);
  const cycleForward = () => {
    setOffset((prevState) => {
      console.log(offset);
      if (prevState > 0) return prevState + 100;
      if (prevState < 0) return 0;
      if (prevState === 0) return prevState + 100;
      return 0;
    });
  };
  const cycleBackward = () => {
    setOffset((prevState) => {
      console.log(offset);
      if (prevState > 0) return prevState - 100;
      if (prevState < 0) return 0;
      if (prevState === 0) return 0;
      return 0;
    });
  };
  return (
    <div className="p-4 flex flex-col justify-between gap-y-2 overflow-hidden">
      <div
        className={cn(
          `min-h-[200px] flex gap-x-2 transition-transform -translate-x-[${offset}dvw]`
        )}
      >
        {TEST_BOOKS.map((book, index) => {
          return (
            <div
              key={Math.random().toString()}
              className="min-h-[450px] min-w-[300px]"
            >
              <BookCard
                title={book.title}
                author={book.author}
                id={book.title}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <Button key="Left Button" className="" onClick={cycleBackward}>
          Left
        </Button>
        <Button key="Right Button" className="" onClick={cycleForward}>
          Right
        </Button>
      </div>
    </div>
  );
};

export default BookCarousel;
