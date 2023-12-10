"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = {
    home: {
        route: "/",
        title: "Home",
    },
    about: {
        route: "/about",
        title: "About me",
    },
};

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 flex h-16 w-full items-center justify-between py-3">
            <Link href={NavLinks.home.route}>
                <div className="h-6 w-6 rounded-md bg-[--highlight-color]" />
            </Link>

            {pathname === "/" ? (
                <Link href={NavLinks.about.route}>
                    <div className="rounded border border-[--highlight-color] px-2 py-1 transition-colors duration-200 hover:bg-[--highlight-color]">
                        <span className="text-[--text-primary]">
                            {NavLinks.about.title}
                        </span>
                    </div>
                </Link>
            ) : null}
        </header>
    );
};

export default Header;
