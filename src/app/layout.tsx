import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psalms For Kids ™ - Kid Lit Treasure Box of 150 Psalms - 2024",
  description: "PFK provides contemporary translations of the Psalms in an engaging format. Featuring captivating illustrations and a paradoxical blend of media resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
