"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);
    const lastPath = pathNames.splice(pathNames.length - 1);

    return (
        <div className="flex gap-2 text-xs">
            {pathNames.map((path, key) => {
                return (
                    <span
                        key={key}
                        className="flex gap-2"
                    >
                        <Link
                            href={
                                "/" +
                                [...pathNames].splice(0, key + 1).join("/")
                            }
                        >
                            {path}
                        </Link>

                        <p>/</p>
                    </span>
                );
            })}

            {lastPath}
        </div>
    );
};

export default Breadcrumb;
