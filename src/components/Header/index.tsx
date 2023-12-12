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
                    <div className="flex rounded border border-[--highlight-color] p-2 text-[--text-primary] transition-colors duration-200 hover:bg-[--highlight-color] hover:text-[#171717]">
                        <span className="m-auto text-xs">
                            {NavLinks.about.title}
                        </span>
                    </div>
                </Link>
            ) : null}
        </header>
    );
};

export default Header;
