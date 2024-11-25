import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head"; // Import the Head component
import "./globals.css";

// Importing your custom Poppins font
const poppins = localFont({
  src: "./fonts/Poppins-Black.woff", // Path to your Poppins font file
  variable: "--font-poppins", // CSS variable to apply the font
  weight: "900", // Specify the weight for Poppins-Black (900)
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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