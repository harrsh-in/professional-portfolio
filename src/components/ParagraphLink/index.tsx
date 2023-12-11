import React from "react";

import Link, { LinkProps } from "next/link";

const ParagraphLink = ({ children, ...others }: IProps) => {
    return (
        <Link
            {...others}
            className="font-bold"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    );
};

export default ParagraphLink;

interface IProps extends LinkProps {
    children: React.ReactNode;
}
