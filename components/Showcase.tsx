import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BookCard } from ".";

import { testBooks } from "@/constants";

const Showcase = () => {
  return (
    <div className="flex flex-row items-center justify-between p-6">
      <div>
        <BsChevronLeft />
      </div>
      <div className="w-full flex flex-row items-center justify-evenly">
        {testBooks.map((book) => (
          <BookCard
            key={book.title}
            title={book.title}
            description={book.description}
          />
        ))}
      </div>
      <div>
        <BsChevronRight />
      </div>
    </div>
  );
};

export default Showcase;
