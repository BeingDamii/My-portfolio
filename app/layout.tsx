import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Eugene Ebenezer",
  description: "Software engineer and designer",
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
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
