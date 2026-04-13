import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "PocketLLM — Your AI lives on a USB stick",
  description:
    "Run local LLMs from a USB drive. No install, no cloud, no trace. Plug in, chat, unplug. Works on macOS and Linux.",
  metadataBase: new URL("https://pocketllm-site.vercel.app"),
  other: {
    "theme-color": "#06080d",
  },
  openGraph: {
    title: "PocketLLM — Your AI lives on a USB stick",
    description:
      "Run local LLMs from a USB drive. No install, no cloud, no trace. Plug in, chat, unplug.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PocketLLM — Your AI lives on a USB stick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PocketLLM — Your AI lives on a USB stick",
    description:
      "Run local LLMs from a USB drive. No install, no cloud, no trace.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrains.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#06080d] text-[#e8eaed]">{children}</body>
    </html>
  );
}
