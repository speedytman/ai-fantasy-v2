"use client";

import { IconType } from "react-icons/lib";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

interface SidebarNavItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarNavItem = ({
  icon: Icon,
  label,
  active,
  href,
}: SidebarNavItemProps) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>
        <Link href={href} className="flex items-center gap-x-4">
          <Icon size={20} />
          <h3>{label}</h3>
        </Link>
      </NavigationMenu.Trigger>
    </NavigationMenu.Item>
  );
};

export default SidebarNavItem;
