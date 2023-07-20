import Header from "@/components/header";
import { auth } from "@/lib/auth";

export default async function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <Header session={session!} />
      <div className="pt-16" />
      {children}
    </>
  );
}
