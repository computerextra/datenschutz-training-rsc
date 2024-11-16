import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Datenschutz Training",
  desciption: "Eine Webapp für die Mitarbeiter Schulung zum Thema Datenschutz",
};

const DynamicNavbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <p>Loading ...</p>,
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${geistSans.className} antialiased`}>
        <header>
          <span>TODO: Header mit Menü?</span>
        </header>
        <nav>
          <DynamicNavbar />
        </nav>
        <main>{children}</main>
        <footer>
          <p>hier kommt der Footer</p>
        </footer>
      </body>
    </html>
  );
}
