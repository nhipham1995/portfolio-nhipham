import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider";
import Navbar from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nhi PHAM",
  description: "Welcome to the world of Nhi PHAM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />

      <body className={inter.className + " dark:bg-primary-800"}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
