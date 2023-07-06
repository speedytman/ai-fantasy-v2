"use client";

import { Button } from "@/components";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();

  const handleLogoClick = () => {
    // TODO: Handle Logo Click
    // if (user) {
    //   router.push("/home");
    // } else {
    //   router.push("/");
    // }
  };

  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-sky-800 p-6 rounded-lg",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        {/* Desktop Start */}
        <div className="hidden md:flex gap-x-2 items-center">
          <Logo onClick={handleLogoClick} isExpanded />
        </div>
        {/* Desktop End */}
        {/* Mobile Start */}
        <div className="flex md:hidden gap-x-2 items-center">
          <div>
            <Logo onClick={handleLogoClick} size={40} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <Button
              onClick={() => router.push("/sign-up")}
              className="bg-transparent text-neutral-300 font-medium"
            >
              Sign Up
            </Button>
          </div>
          <div>
            <Button
              onClick={() => router.push("/sign-in")}
              className="bg-white px-6 py-2"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
