/* src/app/layout.tsx */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Torchlight",
  description: "Premium insights for restoration teams",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
