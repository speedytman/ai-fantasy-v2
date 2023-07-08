"use client";

import { useEffect, useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

import HeroCard from "./hero-card";

const TEST_HERO_ITEMS = [
  {
    id: "testbook1",
    title: "Test Book 1",
    description: "This is a test book",
    author: "Test Author",
  },
  {
    id: "testbook1",
    title: "Test Book 2",
    description: "This is a test book",
    author: "Test Author",
  },
  {
    id: "testbook1",
    title: "Test Book 3",
    description: "This is a test book",
    author: "Test Author",
  },
  {
    id: "testbook1",
    title: "Test Book 4",
    description: "This is a test book",
    author: "Test Author",
  },
];

const Hero = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  // useEffect(() => {
  //   const increaseHeroIndex = () => {
  //     const totalHeros = TEST_HERO_ITEMS.length - 1;
  //     if (heroIndex < totalHeros) {
  //       setHeroIndex((prevState) => prevState + 1);
  //     } else {
  //       setHeroIndex(0);
  //     }
  //   };

  //   const decreaseHeroIndex = () => {
  //     const totalHeros = TEST_HERO_ITEMS.length - 1;
  //     if (heroIndex > 0) {
  //       setHeroIndex((prevState) => prevState - 1);
  //     } else {
  //       setHeroIndex(totalHeros);
  //     }
  //   };
  // }, [setHeroIndex]);

  return (
    <div className="w-full h-full bg-slate-800 text-white relative">
      {TEST_HERO_ITEMS.map((hero, i) =>
        i === heroIndex ? (
          <HeroCard
            key={hero.id}
            title={hero.title}
            description={hero.description}
            id={hero.id}
          />
        ) : null
      )}
      <div className="absolute bottom-8 left-10 h-fit w-fit rounded-full">
        <AiOutlineLeftCircle
          size={30}
          className="hover:text-neutral-500/50 hover:cursor-pointer"
          onClick={() => {
            const totalHeros = TEST_HERO_ITEMS.length - 1;
            if (heroIndex > 0) {
              setHeroIndex((prevState) => prevState - 1);
            } else {
              setHeroIndex(totalHeros);
            }
          }}
        />
      </div>
      <div className="absolute bottom-8 right-10">
        <AiOutlineRightCircle
          size={30}
          className="hover:text-neutral-500/50 hover:cursor-pointer"
          onClick={() => {
            const totalHeros = TEST_HERO_ITEMS.length - 1;
            if (heroIndex < totalHeros) {
              setHeroIndex((prevState) => prevState + 1);
            } else {
              setHeroIndex(0);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
