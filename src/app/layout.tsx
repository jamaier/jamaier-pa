import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacob Maier",
  description: "Jacob Maier's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-fixed bg-gradient-to-tr text-black from-gray-400 to-gray-100 dark:text-gray-100 dark:from-black-100 dark:to-black-300`}
      >
        {children}
      </body>
    </html>
  );
}
