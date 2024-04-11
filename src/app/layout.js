import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PCACS",
  description: "Welcome to PCACS. University Grants Commission, New Delhi has conferred Autonomous Status to Pillai College of Arts, Commerce and Science on 24th June, 2019.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
