import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Links = [
    {
        id: 0,
        url: "/projects",
        description: "a list of all the projects I have been a part of",
    },
    {
        id: 1,
        url: "/uses",
        description: "a list of (almost) everything that I use",
    },
    {
        id: 2,
        url: "/tooling",
        description: "that I am always excited to use",
    },
    {
        id: 3,
        url: "/faq",
        description: "in case the question you have is already answered",
    },
    {
        id: 4,
        url: "/credits",
        description:
            "for the people who've helped and inspired me to make this website",
    },
];

const ExtraPages = () => {
    return (
        <ul className="about-extra-pages-list">
            {Links.map((el) => {
                return (
                    <li
                        className="flex items-center gap-3"
                        key={el.id}
                    >
                        <FaLongArrowAltRight />
                        <Link href={"/about" + el.url}>{el.url}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ExtraPages;
