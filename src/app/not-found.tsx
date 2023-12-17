import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import CommonMetaData from "@/src/constants/metadata";

export const metadata: Metadata = {
    ...CommonMetaData,
    title: "404! | Harrsh Patel",
};

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 text-9xl">404!</h1>
            <h1 className="text-5xl">Page not found :(</h1>

            <Link
                href="/"
                className="mt-24 text-2xl"
            >
                Go back home
            </Link>
        </div>
    );
};

export default PageNotFound;
