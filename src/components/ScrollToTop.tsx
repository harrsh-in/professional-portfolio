"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const isBrowser = () => typeof window !== "undefined";

    const scrollToTop = () => {
        if (!isBrowser() || !isVisible) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener("scroll", toggleVisibility, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-4 right-4 rounded-full bg-white p-[10px] transition-opacity duration-200 ${
                isVisible
                    ? "cursor-pointer opacity-100"
                    : "cursor-default opacity-0"
            }`}
            onClick={scrollToTop}
        >
            <Image
                src="/assets/icons/arrow-up.svg"
                alt="Scroll to top"
                height={24}
                width={24}
                priority={true}
            />
        </button>
    );
};

export default ScrollToTop;
