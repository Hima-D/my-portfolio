// layout.tsx or RootLayout.tsx
import { Geist, Geist_Mono } from "next/font/google"; // Font imports
import GoogleTagManager from "./components/GoogleTagManager"; // Import GoogleTagManager component

// Import the fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Google Site Verification meta tag */}
        <meta
          name="google-site-verification"
          content="aldkpVz1UJxcASd7W76roNr-anxr8iXLBlDbSCtnMIk"
        />
        
        {/* Google Tag Manager (gtag.js) */}
        <GoogleTagManager gtmId="G-QSWE89DM1Z" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
