import { Inter } from "next/font/google";
import "@/src/styles/globals.css";
import Providers from "@/src/components/providers/providers";
import {Toaster} from "sonner";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
          <html lang="en">
            <body className={inter.className}>
                <Providers>
                    {children}
                    <Toaster />
                </Providers>
            </body>
          </html>
  );
}
