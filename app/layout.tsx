import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google"; // ดึง Oswald จาก Google แทน
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// เปลี่ยนจาก localFont เป็น Google Font เพื่อให้รันได้ทันที
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DirectDrive | Performance Parts & Expert Service",
  description:
    "High-quality used car and motorcycle parts, plus expert repair and installation services. Find the parts you need at DirectDrive.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* แก้ไข className ให้เรียกใช้ตัวแปรฟอนต์ที่ถูกต้อง */}
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}