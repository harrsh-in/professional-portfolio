"use client";
import Link from "next/link";

import Breadcrumb from "./Breadcrumb";

const Header = () => {
    return (
        <header className="sticky top-0 flex h-16 w-full items-center justify-between py-3">
            <div className="flex items-center gap-4">
                <Link
                    href="/"
                    title="Home"
                >
                    <div className="h-6 w-6 rounded-md bg-[--color-primary-accent]" />
                </Link>

                <Breadcrumb />
            </div>
        </header>
    );
};

export default Header;
