"use client";

import Logo from "@/components/logo";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Account from "./account";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  return (
    <div className="h-16 w-full bg-white fixed border-b">
      <div className="flex h-full w-full justify-between items-center p-4">
        <Logo size={45} isExpanded />
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
