import React from "react";

const Book = ({ params }: { params: { bookId: string } }) => {
  return <div>Book {params.bookId}</div>;
};

export default Book;
