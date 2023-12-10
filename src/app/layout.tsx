import React from "react";

import "../globals.css";
import { Inter } from "next/font/google";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const inter = Inter({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ScrollToTop />

                <main className="mx-auto flex min-h-screen w-screen max-w-[600px] flex-col px-4">
                    <Header />

                    <div className="flex-1">{children}</div>

                    <Footer />
                </main>
            </body>
        </html>
    );
}
