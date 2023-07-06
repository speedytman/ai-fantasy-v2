import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  console.log(session?.user);
  return <>{children}</>;
};

export default layout;
