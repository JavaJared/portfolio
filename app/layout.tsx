import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jared — Software Engineer",
  description:
    "Portfolio of Jared, a computer science student building web apps, games, and ML projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
