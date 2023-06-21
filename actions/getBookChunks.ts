const getSize = (width: number) => {
  let numberOfDisplayedBooks = 1;
  if (width >= 768 && width < 1024) {
    numberOfDisplayedBooks = 4;
  } else if (width >= 1024 && width < 1280) {
    numberOfDisplayedBooks = 6;
  } else if (width >= 1280 && width < 1536) {
    numberOfDisplayedBooks = 8;
  } else if (width >= 1536) {
    numberOfDisplayedBooks = 10;
  }
  return numberOfDisplayedBooks;
};

const chunks = (books: {
  title: string;
  author: string;
  description: string;
  image_path: string;
}[], size: number) => Array.from(
  new Array(Math.ceil(books.length / size)),
  (_, i) => books.slice(i * size, i * size + size)
);

const getBookChunks = (books: {
  title: string;
  author: string;
  description: string;
  image_path: string;
}[], width: number) => {
  const size = getSize(width);
  return chunks(books, size);
}

export default getBookChunks