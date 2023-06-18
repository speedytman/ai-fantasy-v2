"use client";

import { Button } from "@/components";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const authModal = useAuthModal();
  const router = useRouter();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();

  if (user) {
    router.push("/home");
  }

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    router.push("/");

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
  };

  const handleLogoClick = () => {
    if (user) {
      router.push("/home");
    } else {
      router.push("/");
    }
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
          <Logo onClick={handleLogoClick} />
        </div>
        {/* Desktop End */}
        {/* Mobile Start */}
        <div className="flex md:hidden items-center">
          <GiHamburgerMenu
            size={25}
            onClick={() => {}}
            className="hover:opacity-50 cursor-pointer"
          />
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <div>
            <Logo onClick={handleLogoClick} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>
              <Button onClick={() => router.push("/account")}>
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-transparent text-neutral-300 font-medium"
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
