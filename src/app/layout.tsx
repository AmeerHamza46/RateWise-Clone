import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="pb-10 mb-10 container mx-auto w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
