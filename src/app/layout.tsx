import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CulinAIry.io - AI-Powered Meal Planning",
  description: "CulinAIry.io is an AI-powered meal planning service that creates personalized meal plans based on your preferences, dietary restrictions, and available ingredients.",
  openGraph: {
    title: "CulinAIry.io - AI-Powered Meal Planning",
    description: "CulinAIry.io is an AI-powered meal planning service that creates personalized meal plans based on your preferences, dietary restrictions, and available ingredients.",
    url: "https://culinairy.io",
    siteName: "CulinAIry.io",
    images: [
      {
        url: "https://culinairy.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CulinAIry.io - AI-Powered Meal Planning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J09L7370ZX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J09L7370ZX');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-background min-h-screen antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
