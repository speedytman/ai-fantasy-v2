"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  GiScrollQuill,
  GiBookshelf,
  GiMagnifyingGlass,
  GiHouse,
  GiExitDoor,
} from "react-icons/gi";
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
        icon: GiHouse,
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        icon: GiMagnifyingGlass,
      },
      {
        label: "Library",
        active: pathname === "/library",
        href: "/library",
        icon: GiBookshelf,
      },
      {
        label: "New Book",
        active: pathname === "/book/new",
        href: "/book/new",
        icon: GiScrollQuill,
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
                />
              ))}
            </div>
          </Box>
          <Box className="py-2 px-5">
            {isExpanded ? (
              <Button
                onClick={handleLogout}
                className="bg-white hover:bg-red-500"
              >
                Logout
              </Button>
            ) : (
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className="flex justify-center items-center h-full w-full hover:opacity-90 cursor-pointer hover:text-red-500">
                    <GiExitDoor onClick={handleLogout} size={25} />
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content
                  className="bg-neutral-300 text-black p-2 rounded-xl text-xs "
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
