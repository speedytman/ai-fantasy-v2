import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";

interface BookCardProps {
  title: string;
  author: string;
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, id }) => {
  return (
    <div className="w-1/2 group/card rounded-lg overflow-hidden">
      <div className="relative w-full h-full">
        <div className="w-full h-full absolute bg-transparent group-hover/card:bg-slate-500/75  transition-colors" />
        <div className="absolute w-full h-full">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-fit flex items-center justify-center p-8">
              <h1 className="text-4xl group-hover/card:text-white transition-colors">
                {title.toUpperCase()}
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <Button
                variant="outline"
                className="hidden group-hover/card:block text-white bg-transparent w-fit z-50"
              >
                Learn More
              </Button>
            </div>
            <div className="w-full h-fit flex items-center justify-center p-8">
              <p className="text-muted-foreground group-hover/card:text-white transition-colors">
                by {author}
              </p>
            </div>
          </div>
        </div>
        <AspectRatio ratio={1 / 1.5}>
          <Image
            src="/images/all_of_me_image.jpg"
            fill
            alt="image"
            className="object-cover absolute -z-50"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default BookCard;
