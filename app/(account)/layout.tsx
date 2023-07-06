import Header from "@/components/header";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }
  return (
    <>
      <Header session={session!} />
      {children}
    </>
  );
}
