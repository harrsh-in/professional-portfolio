import React from "react";

import "@/src/globals.css";
import { Inter } from "next/font/google";

import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

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

                <div className="mx-auto flex min-h-screen w-screen max-w-[600px] flex-col">
                    <div className="flex-1">{children}</div>

                    <Footer />
                </div>
            </body>
        </html>
    );
}
