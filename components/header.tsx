"use client";

import Logo from "@/components/logo";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Account from "./account";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = ({ session }: { session: Session }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "h-16 w-full fixed transition-colors z-10",
        isScrolled ? "bg-slate-950" : "bg-transparent"
      )}
    >
      <div className="flex h-full w-full justify-between items-center p-4">
        <Logo
          size={45}
          isExpanded
          onClick={() => router.push("/")}
          classname="text-white"
        />
        <div className="flex">
          {!session?.user ? (
            <Link
              href="/sign-in"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Login
            </Link>
          ) : (
            <Account user={session.user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
