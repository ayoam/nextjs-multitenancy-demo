import {Inter} from "next/font/google";
import "@/src/app/[locale]/globals.css";
import {getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from "next-intl";
import {SessionProvider} from "next-auth/react"

const inter = Inter({subsets: ["latin"]});

export default async function RootLayout({children, params: {locale}}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <SessionProvider>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
