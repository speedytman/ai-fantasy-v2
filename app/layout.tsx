import ToasterProvider from "@/providers/toaster-provider";
import "./globals.css";

import { Oswald } from "next/font/google";
import { WindowContextProvider } from "@/context/WindowContext";
import { SessionProvider } from "next-auth/react";
import { ModalProvider } from "@/providers/modal-provider";
const font = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "RealmWise",
  description:
    "Discover captivating tales with AI assistance on RealmWise. Dive into rich fantasy worlds, explore enchanting realms, and embark on thrilling quests. Unleash your imagination and experience immersive storytelling like never before.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
