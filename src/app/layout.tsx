import type { Metadata } from "next";
import Head from "next/head"; // Import the Head component
import "./globals.css";



export const metadata: Metadata = {
  title: "Siti Khadijah",
  description: "Welcome to Our VisitorCenter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        className={'${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased'}
      >
        {children}
      </body>
    </html>
  );
}