import Link from "next/link";
import React from "react";

const BookCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex items-center justify-center mt-12">
        <div>
          <Link
            href="/"
            className="relative block w-[20rem] h-[40rem] bg-black group"
          >
            <div className="absolute bg-sky-400 inset-0 w-full h-full group-hover:opacity-50"></div>
            <div className="relative p-10">
              <div className="mt-2">
                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="p-2">
                    <h3 className="text-2xl text-white">{title}</h3>
                    <p className="text-xs text-gray-400">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookCard;
