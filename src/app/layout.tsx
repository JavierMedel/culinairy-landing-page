import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CulinAIry.io – Smart AI-Powered Meal Planning",
  description: "Effortless meal planning with AI-curated recipes, step-by-step visual guides, and smart shopping lists. CulinAIry.io adapts to your tastes, making cooking simple, fun, and inspiring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background min-h-screen antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
