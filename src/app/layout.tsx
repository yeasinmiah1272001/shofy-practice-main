import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Component/Header/Header";
import { Footer } from "@/Component/Footer/Footer";
import LayOut from "@/Component/LayOut/LayOut";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shofy ecommarce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayOut>
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-right" reverseOrder={false} />
        </LayOut>
      </body>
    </html>
  );
}
