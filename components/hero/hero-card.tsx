"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface HeroCardProps {
  title: string;
  description: string;
  id: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, description, id }) => {
  const router = useRouter();
  return (
    <>
      <Image
        src="/images/all_of_me_image.jpg"
        fill
        alt="image"
        className="object-cover absolute"
      />
      <div className="absolute w-[calc(100%-2rem)] h-[calc(100%-1rem)] m-4 mt-0 bg-white opacity-25"></div>
      <div className="absolute w-full h-full flex justify-center">
        <div className="min-w-full px-8 xl:min-w-[1180px] xl:p-0">
          <div className="flex flex-col justify-evenly pt-32 gap-y-8">
            <h1 className="text-black text-8xl">{title}</h1>
            <p className="text-muted-foreground text-xl">{description}</p>
            <div className="w-fit">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-black text-2xl border-black"
                onClick={() => router.push(`/book/${id}`)}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
