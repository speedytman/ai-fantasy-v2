"use client";

import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import CarouselItem from "./CarouselItem";
import { useContext, useEffect, useState } from "react";
import getBookChunks from "@/actions/getBookChunks";
import { WindowContext } from "@/context/WindowContext";
import { RxDot, RxDotFilled } from "react-icons/rx";

interface CarouselProps {
  title?: string;
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

const Carousel = ({ title }: CarouselProps) => {
  const { clientHeight, clientWidth } = useContext(WindowContext);
  const [displayedBookChunk, setDispalyedBookChunk] = useState(0);
  const [bookChunks, setBookChunks] = useState([
    [
      {
        title: "",
        author: "",
        description: "",
        image_path: "",
      },
    ],
  ]);

  //setBookChunks(getBookChunks(TEST_BOOKS));
  useEffect(() => {
    setBookChunks(getBookChunks(TEST_BOOKS, clientWidth));
  }, [clientWidth]);

  const handleCycleForward = () => {
    const numberOfChunks = bookChunks.length;
    if (displayedBookChunk === numberOfChunks - 1) {
      setDispalyedBookChunk(0);
    } else {
      setDispalyedBookChunk((prevState) => prevState + 1);
    }
  };

  const handleCycleBackward = () => {
    const numberOfChunks = bookChunks.length;
    if (displayedBookChunk === 0) {
      setDispalyedBookChunk(numberOfChunks - 1);
    } else {
      setDispalyedBookChunk((prevState) => prevState - 1);
    }
  };

  const renderDots = (numberOfDots: number, selectedDot: number) => {
    let arrayOfDots: any = [];
    for (let index = 0; index < numberOfDots; index++) {
      if (index !== selectedDot) {
        arrayOfDots = [...arrayOfDots, <RxDot size={15} />];
      } else {
        arrayOfDots = [...arrayOfDots, <RxDotFilled size={15} />];
      }
    }

    return arrayOfDots;
  };

  return (
    <div className="w-full h-fit">
      {title ? <h2>{title}</h2> : null}
      <div className="w-full h-[250px] flex items-center justify-between">
        <div
          onClick={handleCycleBackward}
          className="h-full w-fit hover:bg-neutral-500/20 cursor-pointer flex items-center rounded-lg"
        >
          <IoCaretBack size={25} />
        </div>
        <div className="h-full w-full p-2 hidden md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2">
          {bookChunks[displayedBookChunk].map((item) => (
            <CarouselItem
              title={item.title}
              author={item.author}
              description={item.description}
              imagePath={item.image_path}
            />
          ))}
        </div>
        <div
          onClick={handleCycleForward}
          className="h-full w-fit hover:bg-neutral-500/20 cursor-pointer flex items-center rounded-lg"
        >
          <IoCaretForward size={25} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        {renderDots(bookChunks.length, displayedBookChunk)}
      </div>
    </div>
  );
};

export default Carousel;
