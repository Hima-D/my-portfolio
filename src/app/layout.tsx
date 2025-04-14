import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // For GTM script

// Font imports with CSS variable support
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himanshu Dixit",
  description: "Machine Learning Engineer | Data Scientist",
  openGraph: {
    title: "Himanshu Dixit",
    description: "Machine Learning Engineer | Data Scientist",
    images: [
      {
        url: "/default-image.jpg",
        width: 1200,
        height: 630,
        alt: "Himanshu Dixit",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "aldkpVz1UJxcASd7W76roNr-anxr8iXLBlDbSCtnMIk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Geist fonts (optional but useful if self-hosting or using CDN) */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/geistsans/v4/FjF7Pt9vwftz4gU4J49flpS3nYKD2A2P3DviQA7P9z4.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/geistmono/v4/LnP6zEj7CBtAwSy36UkA6pLhPZZ_29h0b5pIogG9vvE.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Google Tag Manager script */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-QSWE89DM1Z');
            `,
          }}
        />

        {/* Your App */}
        <main>{children}</main>
      </body>
    </html>
  );
}
