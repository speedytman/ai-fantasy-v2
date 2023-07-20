import ToasterProvider from "@/providers/toaster-provider";
import "./globals.css";

import { Oswald } from "next/font/google";
import { ModalProvider } from "@/providers/modal-provider";
import Header from "@/components/header";
import { auth } from "@/lib/auth";
const font = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "RealmWise",
  description:
    "Discover captivating tales with AI assistance on RealmWise. Dive into rich fantasy worlds, explore enchanting realms, and embark on thrilling quests. Unleash your imagination and experience immersive storytelling like never before.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <ModalProvider />

        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
