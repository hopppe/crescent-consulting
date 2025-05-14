import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crescent Consulting | Tailored Advisory Services",
  description: "Independent consultants offering advisory services in sales, marketing, branding, and financial management across the UK, US, and Middle East.",
  keywords: ["consulting", "advisory", "marketing", "branding", "financial management", "sales strategy"],
  icons: {
    icon: [
      { url: '/favicon.svg' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crescentconsulting.co/',
    title: 'Crescent Consulting | Tailored Advisory Services',
    description: 'Independent consultants offering advisory services in sales, marketing, branding, and financial management across the UK, US, and Middle East.',
    siteName: 'Crescent Consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crescent Consulting | Tailored Advisory Services',
    description: 'Independent consultants offering advisory services in sales, marketing, branding, and financial management across the UK, US, and Middle East.',
    creator: '@crescentconsult',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
