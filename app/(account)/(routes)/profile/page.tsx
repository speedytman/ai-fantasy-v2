import { RxAvatar as AvatarPlaceholder } from "react-icons/rx";

import { auth } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UsernameForm from "./components/username-change-form";
import { db } from "@/lib/db";

const ProfilePage = async () => {
  const session = await auth();
  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  console.log(user?.username);

  return (
    <div className="flex gap-8">
      <Avatar className="h-64 w-64">
        <AvatarImage src={session?.user.image!} />
        <AvatarFallback>
          <AvatarPlaceholder size={40} />
        </AvatarFallback>
      </Avatar>
      <UsernameForm initialData={user?.username!} />
    </div>
  );
};

export default ProfilePage;
