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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={'${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased'}
      >
        {children}
      </body>
    </html>
  );
}