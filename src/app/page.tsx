import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import ParagraphText from "../components/ParagraphText";
import CommonMetaData from "../constants/metadata";

export const metadata: Metadata = {
    ...CommonMetaData,
    title: "Hello hello!! | Harrsh Patel",
};

const Home = () => {
    return (
        <div>
            <div
                id="title"
                className="my-6 flex justify-center"
            >
                <h1 className="py-5 text-4xl font-bold">
                    Hey, I&apos;m Harrsh!{" "}
                    <span
                        role="img"
                        aria-label="wave"
                    >
                        👋
                    </span>
                </h1>
            </div>

            <ParagraphText>
                I&apos;m a Senior Full-Stack Developer currently working at{" "}
                <Link
                    href="https://7span.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    7Span
                </Link>
                . My passion for technology extends beyond 4 years, specializing
                in cloud-based technologies, full-stack development, and a deep
                understanding of AWS services. I am adept in creating robust,
                scalable applications using a variety of technologies including
                Node.js, React.js, and various database systems like MySQL and
                MongoDB.
            </ParagraphText>

            <ParagraphText>
                When I&apos;m not immersed in coding, I explore the world
                through my camera and delve into the pages of intriguing books
                like &quot;The Hidden Hindu.&quot; My culinary adventures in the
                kitchen are another creative outlet, where I enjoy experimenting
                with new recipes and baking techniques.
            </ParagraphText>

            <ParagraphText>
                My life is a blend of professional dedication and personal
                passions. I strive for a balance that fuels my professional
                growth while embracing the joys and discoveries of everyday
                life. Join me on this journey of technological innovation,
                exploration, and storytelling.
            </ParagraphText>

            <ParagraphText>
                I&apos;m passionate about crafting exceptional user experiences.
                I strive to create pixel-perfect interfaces that seamlessly
                blend design and engineering principles. I&apos;m a lifelong
                learner, always seeking to expand my horizons. Thus,
                continuously exploring my capabilities to build efficient and
                scalable web applications.
            </ParagraphText>
        </div>
    );
};

export default Home;
