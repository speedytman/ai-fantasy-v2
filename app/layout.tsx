import ToasterProvider from "@/providers/ToasterProvider";
import "./globals.css";

import { Oswald } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
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
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              {children}
            </UserProvider>
          </SupabaseProvider>
        </WindowContextProvider>
      </body>
    </html>
  );
}
