import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Session, User } from "next-auth";
import { RxAvatar as AvatarPlaceholder } from "react-icons/rx";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Account = ({ user }: { user: User }) => {
  const router = useRouter();
  const handleSignout = async () => {
    await signOut();
    router.refresh();
  };
  const routes = [
    {
      href: "settings",
      label: "Settings",
    },
  ];
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={user?.image!} />
          <AvatarFallback>
            <AvatarPlaceholder size={40} />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup heading="heading">
              <CommandItem>Test 1</CommandItem>
              <CommandItem>Test 2</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem onSelect={() => handleSignout()}>Logout</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Account;
