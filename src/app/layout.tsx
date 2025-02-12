import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Your global styles
import Head from "next/head";
import GoogleTagManager from "../components/GoogleTagManager"; // Import the GoogleTagManager component

// Font imports with preloading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Ensures text is shown while the font is loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Ensures text is shown while the font is loading
});

export const metadata: Metadata = {
  title: "Himanshu Dixit",
  description: "Machine Learning Engineer | AI Enthusiast | Data Scientist",
  openGraph: {
    title: "Himanshu Dixit",
    description: "Machine Learning Engineer | AI Enthusiast | Data Scientist",
    images: [
      {
        url: "/default-image.jpg", // Placeholder image path
        width: 1200,
        height: 630,
        alt: "Himanshu Dixit",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
        {/* Preload fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/geistsans/v4/FjF7Pt9vwftz4gU4J49flpS3nYKD2A2P3DviQA7P9z4.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/geistmono/v4/LnP6zEj7CBtAwSy36UkA6pLhPZZ_29h0b5pIogG9vvE.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
