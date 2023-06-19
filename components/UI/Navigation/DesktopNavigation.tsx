"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { BiSearch, BiLogOut } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { IoLibrarySharp } from "react-icons/io5";
import { GiScrollQuill } from "react-icons/gi";
import Logo from "../Logo";
import Button from "../Button";
import Box from "../Box";
import NavigationItem from "./NavigationItem";
import { twMerge } from "tailwind-merge";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import * as Tooltip from "@radix-ui/react-tooltip";

interface DesktopNavigationProps {
  children: React.ReactNode;
}

const DesktopNavigation = ({ children }: DesktopNavigationProps) => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname === "/home",
        href: "/home",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathname === "search",
        href: "/search",
        icon: BiSearch,
      },
      {
        label: "Library",
        active: pathname === "library",
        href: "/library",
        icon: IoLibrarySharp,
      },
      {
        label: "New Book",
        active: pathname === "book/new",
        href: "/book/new",
        icon: GiScrollQuill,
        size: 40,
      },
    ],
    [pathname]
  );

  const handleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    router.push("/");

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
  };

  return (
    <Tooltip.Provider delayDuration={400}>
      <div className="flex h-full">
        <div
          className={twMerge(
            "hidden md:flex flex-col gap-y-2 bg-black h-full w-[20rem] p-2",
            !isExpanded && "w-fit"
          )}
        >
          <Box className="p-4 flex justify-center items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Logo onClick={handleExpansion} isExpanded={isExpanded} />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-neutral-300 text-black p-2 rounded-xl text-xs"
                  side="right"
                  sideOffset={5}
                >
                  {isExpanded ? "Collapse" : "Expand"}
                  <Tooltip.TooltipArrow className="fill-neutral-300" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Box>
          <Box className="overflow-y-auto h-full">
            <div className="flex flex-col gap-y-2 px-5 py-4">
              {routes.map((item) => (
                <NavigationItem
                  key={item.label}
                  label={item.label}
                  active={item.active}
                  href={item.href}
                  icon={item.icon}
                  isExpanded={isExpanded}
                  size={item.size}
                />
              ))}
            </div>
          </Box>
          <Box className="py-2 px-5">
            {isExpanded ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className="flex justify-center items-center h-full w-full hover:opacity-50 cursor-pointer">
                    <BiLogOut onClick={handleLogout} size={25} />
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content
                  className="bg-neutral-300 text-black p-2 rounded-xl text-xs"
                  side="right"
                  sideOffset={5}
                >
                  Logout
                  <Tooltip.TooltipArrow className="fill-neutral-300" />
                </Tooltip.Content>
              </Tooltip.Root>
            )}
          </Box>
        </div>
        <main className="h-full flex-1 overflow-y-auto py-2 pr-2">
          {children}
        </main>
      </div>
    </Tooltip.Provider>
  );
};

export default DesktopNavigation;
