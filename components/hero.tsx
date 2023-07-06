import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

const Hero = () => {
  return (
    <div className="w-full h-full bg-slate-800 text-white relative">
      <Image
        src="/images/all_of_me_image.jpg"
        fill
        alt="image"
        className="absolute"
      />
      <div className="absolute w-[calc(100%-2rem)] h-[calc(100%-1rem)] m-4 mt-0 bg-white opacity-25"></div>
    </div>
  );
};

export default Hero;
