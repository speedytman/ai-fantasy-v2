import Header from "@/components/header";
import { auth } from "@/lib/auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <Header session={session!} />
      {children}
    </>
  );
}
