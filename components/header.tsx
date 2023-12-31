"use client";

import Link from "next/link";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RiMenuLine } from "react-icons/ri";

import Logo from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Account from "@/components/account";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = ({ session }: { session: Session }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();

  const routes = [
    {
      href: "/",
      label: "Read",
    },
    {
      href: "/",
      label: "Search",
    },
    {
      href: "/",
      label: "Random",
    },
    {
      href: "/your-books",
      label: "Your Books",
      authRequired: true,
    },
  ];

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
        "h-16 w-full fixed transition-colors z-50 flex justify-center",
        isScrolled ? "bg-slate-950" : "bg-transparent"
      )}
    >
      {/* Desktop Header */}
      <div className="md:min-w-full md:px-8 xl:min-w-[1180px] xl:p-0 h-full">
        <div className="hidden md:flex h-full w-full justify-between items-center p-4">
          <Logo
            size={45}
            isExpanded
            onClick={() => router.push("/")}
            className={cn(isScrolled ? "text-white" : "text-black")}
          />
          <div className="flex w-full items-center justify-start gap-8 px-8">
            {routes.map((item) => {
              if (!item.authRequired) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(isScrolled ? "text-white" : "text-black")}
                  >
                    {item.label}
                  </Link>
                );
              } else if (item.authRequired && session?.user) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(isScrolled ? "text-white" : "text-black")}
                  >
                    {item.label}
                  </Link>
                );
              } else return;
            })}
          </div>
          <div className="flex">
            {!session?.user ? (
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  isScrolled ? "text-white" : "text-black"
                )}
              >
                Login
              </Link>
            ) : (
              <Account user={session.user} />
            )}
          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="flex justify-between items-center min-w-full h-full p-8 md:hidden">
        <Logo
          size={45}
          isExpanded
          onClick={() => router.push("/")}
          className={cn(isScrolled ? "text-white" : "text-black")}
        />
        <div>
          <Sheet>
            <SheetTrigger>
              <RiMenuLine
                size={30}
                className={cn(isScrolled ? "text-white" : "text-black")}
              />
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>
                  <Logo isExpanded size={45} />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-y-2">
                {routes.map((item) => (
                  <Link key={item.label} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
