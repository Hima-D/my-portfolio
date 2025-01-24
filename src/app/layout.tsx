import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Your global styles
import Head from "next/head";
import GoogleTagManager from "../components/GoogleTagManager"; // Import the GoogleTagManager component

// Font imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Dixit",
  description: "Machine Learning Engineer | AI Enthusiast | Data Scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Head>
        {/* Google Site Verification meta tag */}
        <meta
          name="google-site-verification"
          content="aldkpVz1UJxcASd7W76roNr-anxr8iXLBlDbSCtnMIk"
        />
        
        {/* Google Tag Manager (gtag.js) */}
        <GoogleTagManager gtmId="G-QSWE89DM1Z" />

        {/* Favicon link */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
