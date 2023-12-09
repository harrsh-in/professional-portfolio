import React from "react";

import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="mx-auto h-screen w-screen max-w-[600px]"
        >
            <body className={inter.className}>{children}</body>
        </html>
    );
}
