import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Concentrated.pro - get shit done.",
  description:
    "The problem is not you, the problem is what surrounds you",
  openGraph: {
    images: [
      {
        url: "https://concentrated.pro/og-image.png",
        width: 2185,
        height: 987,
        alt: "Concentrated.pro - get shit done.",
      },
    ],
  },
  metadataBase: {
    host: "https://concentrated.pro",
    href: "/",
    origin: "https://concentrated.pro",
    password: "concentrated",
    hash: "concentrated",
    pathname: "/",
    search: "",
    username: "concentrated",
    hostname: "concentrated.pro",
    port: "",
    protocol: "https:",
    searchParams: new URLSearchParams(""),
    toString: () => "https://concentrated.pro/",
    toJSON: () => "https://concentrated.pro/",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://concentrated.pro",
    creator: "https://concentrated.pro",
    title: "Concentrated.pro - get shit done.",
    description:
      "The problem is not you, the problem is what surrounds you.",
    images: [
      {
        url: "https://concentrated.pro/og-image.png",
        width: 2185,
        height: 987,
        alt: "Concentrated.pro - get shit done.",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
