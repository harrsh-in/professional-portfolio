import React from "react";

import Link from "next/link";

import IconLinks from "./IconLinks";

const SocialMedia = () => {
    return (
        <div className="mb-3 flex items-center gap-4">
            {IconLinks.map((icon, index) => {
                return (
                    <Link
                        key={index}
                        href={icon.link}
                        title={icon.title}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="highlight text-2xl">
                            <icon.icon />
                        </span>
                    </Link>
                );
            })}
        </div>
    );
};

export default SocialMedia;
