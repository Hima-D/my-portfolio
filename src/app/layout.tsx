import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
    <html lang="en">
      <Head>
        {/* Google Site Verification meta tag */}
        <meta
          name="google-site-verification"
          content="aldkpVz1UJxcASd7W76roNr-anxr8iXLBlDbSCtnMIk"
        />
        
        {/* Google Tag Manager (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QSWE89DM1Z"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QSWE89DM1Z');
          `}
        </script>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
