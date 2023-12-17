import { Metadata } from "next";

const longDescription =
    "Harsh Patel - Experienced Full-Stack Developer and Cloud Engineer specializing in MERN stack, AWS, and TypeScript. Expert in client communication, team management, and innovative web solutions.";
const shortDescription =
    "Harrsh Patel - Expert Full-Stack Dev & Cloud Engineer with MERN & AWS";

const CommonMetaData: Metadata = {
    description: longDescription,
    authors: [
        {
            name: "Harrsh Patel",
            url: process.env.SITE_URL,
        },
    ],
    abstract: shortDescription,
    alternates: {
        canonical: "https://harrsh.com",
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: shortDescription,
    },
    applicationName: shortDescription,
    category: shortDescription,
    classification: longDescription,
    creator: "Harrsh Patel",
    generator: "Next.js",
    keywords:
        "Full-Stack Development, Cloud Engineering, MERN Stack, AWS Cloud Services, TypeScript Programming, Web Application Design, Node.js Development, React.js Expertise, MongoDB Database, Express.js Framework, Front-End and Back-End Developer, Software Solution Architect, Client Communication in IT, Technical Team Leadership, Custom Web Development, Scalable Cloud Solutions, Professional Web Developer, Cloud Infrastructure Optimization, Agile Software Methodology, Innovative Tech Solutions",
    manifest: `${process.env.SITE_URL}/manifest.json`,
    publisher: "Harrsh Patel",
    referrer: "origin",
    robots: "index, follow",
    openGraph: {
        type: "profile",
        description: longDescription,
        url: process.env.SITE_URL,
        title: shortDescription,
        determiner: "auto",
        emails: "dev@harrsh.com",
        firstName: "Harrsh",
        lastName: "Patel",
        siteName: shortDescription,
        username: "harrsh",
    },
    twitter: {
        card: "summary_large_image",
        title: shortDescription,
        creator: "Harrsh Patel",
        description: longDescription,
        site: "@site",
    },
};

export default CommonMetaData;
