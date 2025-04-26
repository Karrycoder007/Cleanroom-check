import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from 'next/font/google'
 // adjust path if needed

 const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // You can customize weights
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Cleanroom | Cleaning Services",
  description: "Providing cleaning services across all industries.",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={poppins.className}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
