import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BookCardProps {
  title: string;
  author: string;
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, id }) => {
  return (
    <>
      <div className="w-full h-full group/card overflow-hidden">
        <AspectRatio ratio={1 / 1}>
          <Image
            src="/images/all_of_me_image.jpg"
            fill
            alt="image"
            className="object-cover absolute -z-50 rounded-lg"
          />
        </AspectRatio>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start p-1">
        <h1 className="text-xl ">{title.toUpperCase()}</h1>
        <div className="text-muted-foreground text-sm flex gap-1">
          By:<p className="text-black">{author}</p>
        </div>
      </div>
    </>
  );
};

export default BookCard;
