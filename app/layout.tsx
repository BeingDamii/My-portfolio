import type { Metadata } from "next";
import "./globals.scss";

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
