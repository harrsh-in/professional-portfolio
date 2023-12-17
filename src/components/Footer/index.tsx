"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 text-xs sm:px-5 sm:text-sm">
            <p className="mb-2 mt-6 text-center">
                Made with ❤️ using{" "}
                <Link
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    NextJS
                </Link>{" "}
                &{" "}
                <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tailwind CSS
                </Link>
            </p>

            <p className="mb-2 text-center">
                View source on{" "}
                <Link
                    href="https://github.com/harrsh-in/professional-portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </Link>{" "}
            </p>

            <p className="text-center">I hope you have a very nice day :)</p>
        </footer>
    );
}
