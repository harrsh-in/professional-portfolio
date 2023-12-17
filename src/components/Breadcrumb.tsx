"use client";

import { usePathname } from "next/navigation";

const Breadcrumb = () => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    console.log(pathNames);

    return <div>Breadcrumb</div>;
};

export default Breadcrumb;
