"use client";
import React, { useEffect, useState } from "react";

import "../globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

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
    const [randomColor, setRandomColor] = useState<string>("#fff");

    useEffect(() => {
        const colors = [
            "#1586EC",
            "#1EAEC9",
            "#FB3B08",
            "#A847B5",
            "#CE2B60",
            "#F73E03",
            "#F0EC03",
        ];
        setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader
                    color={randomColor}
                    showSpinner={false}
                />
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
