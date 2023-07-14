"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const TEST_LIST = [
  {
    id: 1,
    bg: "bg-rose-500",
  },
  {
    id: 2,
    bg: "bg-emerald-500",
  },
  {
    id: 3,
    bg: "bg-sky-500",
  },
  {
    id: 4,
    bg: "bg-slate-500",
  },
  {
    id: 5,
    bg: "bg-rose-500",
  },
  {
    id: 6,
    bg: "bg-emerald-500",
  },
  {
    id: 7,
    bg: "bg-sky-500",
  },
  {
    id: 8,
    bg: "bg-slate-500",
  },
  {
    id: 9,
    bg: "bg-rose-500",
  },
  {
    id: 10,
    bg: "bg-emerald-500",
  },
];

const Test = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef(null);
  const cardRef = useRef(null);

  const cardWidth = 384 + 8;
  const totalCards = TEST_LIST.length;

  useEffect(() => {
    setWidth(
      carouselRef.current.offsetWidth -
        (carouselRef.current.offsetWidth % cardWidth)
    );
    function handleResize() {
      setWidth(
        carouselRef.current.offsetWidth -
          (carouselRef.current.offsetWidth % cardWidth)
      );
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(cardRef.current.offsetWidth);

  return (
    <div className="h-full w-full bg-sky-100 flex items-center justify-center">
      <div
        ref={carouselRef}
        className="h-1/3 w-full bg-emerald-500 overflow-hidden relative"
      >
        <div
          onClick={() => {
            setScroll((prevState) => {
              if (prevState + width > 0) {
                if (prevState !== 0) {
                  return 0;
                } else {
                  return -(totalCards * cardWidth - width);
                }
              }
              return prevState + width;
            });
          }}
          className="absolute left-0 p-2 z-10 h-full w-fit"
        >
          <div className="h-full w-full flex justify-center items-center">
            <FaChevronCircleLeft
              className="absolute text-slate-500 rounded-full shadow-sm hover:text-slate-400 hover:cursor-pointer"
              size={35}
              title="Scroll Carousel Left"
            />
            <div className="bg-white h-6 w-6" />
          </div>
        </div>
        <div
          onClick={() => {
            setScroll((prevState) => {
              if (prevState === -(totalCards * cardWidth - width)) return 0;
              if (prevState - width > -(totalCards * cardWidth - width)) {
                return prevState - width;
              }
              return -(totalCards * cardWidth - width);
            });
          }}
          className="absolute right-0 p-2 z-10 h-full w-fit"
        >
          <div className="h-full w-full flex justify-center items-center">
            <FaChevronCircleRight
              className="absolute text-slate-500 rounded-full shadow-sm hover:text-slate-400 hover:cursor-pointer"
              size={35}
              title="Scroll Carousel Right"
            />
            <div className="bg-white h-6 w-6" />
          </div>
        </div>
        <div className="h-full w-fit flex flex-grow gap-2 px-4 overflow-hidden">
          {TEST_LIST.map((item) => (
            <div
              key={item.id}
              ref={cardRef}
              className={"h-full w-96 relative"}
              style={{
                translate: `${scroll}px`,
                transition: "translate 1s",
              }}
            >
              <div className="h-full w-full bg-yellow-400 absolute">
                {item.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
