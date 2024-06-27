import type { Metadata } from "next";
import { Henny_Penny, Roboto } from "next/font/google";
import "./globals.css";
import "@/styles/tabs.css";
import ScrollBottomToTop from "@/components/common/ScrollBottomToTop";
import Preloader from "@/components/common/Preloader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const henny_penny = Henny_Penny({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Psalms For Kids ™ - Kid Lit Treasure Box of 150 Psalms - 2024",
  description:
    "PFK provides contemporary translations of the Psalms in an engaging format. Featuring captivating illustrations and a paradoxical blend of media resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${roboto.className}`}>
        {children}
        <ScrollBottomToTop/>
        <Preloader/>
      </body>
    </html>
  );
}
