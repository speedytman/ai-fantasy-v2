"use client";

import { cn } from "@/lib/utils";
import { GiAncientSword } from "react-icons/gi";

interface LogoProps {
  onClick?: () => void;
  isExpanded?: boolean;
  size?: number;
  classname?: string;
}

const Logo = ({ onClick, isExpanded, size = 25, classname }: LogoProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-row gap-x-1 items-center justify-center cursor-pointer hover:opacity-90",
        classname
      )}
    >
      <GiAncientSword size={size} />
      {isExpanded ? (
        <h1 className={cn(size > 35 ? "text-3xl" : "text-xl")}>RealmWise</h1>
      ) : null}
    </div>
  );
};

export default Logo;
