import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { Providers } from "./providers";

import { Analytics } from '@vercel/analytics/react';

const font = Rajdhani({
    subsets: ["latin"],
    weight: ['300']
});

export const metadata: Metadata = {
    title: "goldenr",
    description: "engineering beauty",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={font.className}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
