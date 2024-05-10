import { Inter } from "next/font/google";
import "@/src/styles/globals.css";
import Providers from "@/src/components/providers/providers";
import {Toaster} from "sonner";
import React from "react";
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export default function RootLayout({children,params: {lang}}) {
  return (
          <html lang={lang} dir={dir(lang)}>
            <body className={inter.className}>
                <Providers>
                    {children}
                    <Toaster />
                </Providers>
            </body>
          </html>
  );
}
