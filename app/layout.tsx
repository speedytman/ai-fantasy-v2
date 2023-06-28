import ToasterProvider from "@/providers/ToasterProvider";
import "./globals.css";

import { Oswald } from "next/font/google";
import { WindowContextProvider } from "@/context/WindowContext";
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
        <WindowContextProvider>
          <ToasterProvider />
          {children}
        </WindowContextProvider>
      </body>
    </html>
  );
}
