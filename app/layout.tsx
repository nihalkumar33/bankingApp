import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })

const IBM = IBM_Plex_Serif( {
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horison",
  description: "Horison is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${IBM.variable}`}>{children}</body>
    </html>
  );
}
