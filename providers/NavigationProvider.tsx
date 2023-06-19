"use client";

import { Box } from "@/components";
import SidebarNavItem from "@/components/UI/Navigation/NavigationItem";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname === "home",
        href: "/home",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathname === "search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathname]
  );

  return (
    <div>
      <NavigationMenu.Root orientation="vertical">
        <NavigationMenu.List>
          {routes.map((item) => (
            <SidebarNavItem
              key={item.label}
              label={item.label}
              active={item.active}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <main>{children}</main>
    </div>
  );
};

export default NavigationProvider;
