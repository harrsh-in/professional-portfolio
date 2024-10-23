"use client";

import Link from "next/link";
import OutlinedButton from "./buttons/OutlinedButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-8 py-2 lg:py-4 shadow">
            <h1 className="logo text-xl">
                <Link href="/">Harrsh</Link>
            </h1>

            <NavLinks />

            <OutlinedButton className="border-highlight-color text-highlight-color lg:py-2">
                Resume
            </OutlinedButton>
        </div>
    );
};

export default Navbar;

const NavLinks = () => {
    const pathName = usePathname();

    return (
        <div className="flex gap-4">
            {links.map((link) => (
                <Link
                    key={link.id}
                    href={link.href}
                    className={`${pathName === link.href ? "text-highlight-color" : ""}`}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

const links = [
    {
        id: "home",
        name: "Home",
        href: "/",
    },
    {
        id: "about",
        name: "About",
        href: "/about",
    },
    {
        id: "projects",
        name: "Projects",
        href: "/projects",
    },
    {
        id: "contact",
        name: "Contact",
        href: "/contact",
    },
];
