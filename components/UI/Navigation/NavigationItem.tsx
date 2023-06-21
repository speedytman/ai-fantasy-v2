"use client";

import Link from "next/link";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";
import * as Tooltip from "@radix-ui/react-tooltip";

interface NavigationItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
  isExpanded: boolean;
  size?: number;
}

const NavigationItem = ({
  icon: Icon,
  label,
  active,
  href,
  isExpanded,
  size = 25,
}: NavigationItemProps) => {
  return (
    <>
      {isExpanded ? (
        <Link
          href={href}
          className="flex items-center gap-4 p-2 hover:opacity-50"
        >
          <Icon
            size={size}
            className={twMerge(active ? "text-sky-300" : "text-white")}
          />

          <h2 className={twMerge(active ? "text-sky-300" : "text-white")}>
            {label}
          </h2>
        </Link>
      ) : (
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Link
              href={href}
              className="flex items-center gap-4 p-2 hover:opacity-50"
            >
              <Icon
                size={25}
                className={twMerge(active ? "text-sky-300" : "text-white")}
              />
            </Link>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-neutral-300 text-black p-2 rounded-xl text-xs"
              side="right"
              sideOffset={5}
            >
              {label}
              <Tooltip.TooltipArrow className="fill-neutral-300" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      )}
    </>
  );
};

export default NavigationItem;
