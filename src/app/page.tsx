import { Metadata } from "next";

import ParagraphHighlightText from "@/src/components/ParagraphHighlightText";
import ParagraphLink from "@/src/components/ParagraphLink";
import ParagraphText from "@/src/components/ParagraphText";
import CommonMetaData from "@/src/constants/metadata";

export const metadata: Metadata = {
    ...CommonMetaData,
    title: "Hello hello!! | Harrsh Patel",
};

const Home = () => {
    return (
        <div>
            <h1 className="my-6 flex justify-center py-5 text-4xl font-bold">
                Hey, I&apos;m Harrsh!{" "}
                <span
                    role="img"
                    aria-label="wave"
                >
                    👋
                </span>
            </h1>

            <ParagraphText>
                I&apos;m a Senior Full-Stack Developer currently working at{" "}
                <ParagraphLink href="https://7span.com/">7Span</ParagraphLink>.
                My passion for technology extends beyond 4 years, specializing
                in cloud-based technologies, full-stack development, and a deep
                understanding of{" "}
                <ParagraphHighlightText>AWS</ParagraphHighlightText> services. I
                am adept in creating robust, scalable applications using a
                variety of technologies including{" "}
                <ParagraphHighlightText>
                    MERN stack + TypeScript
                </ParagraphHighlightText>{" "}
                and various database systems like MySQL and MongoDB.
            </ParagraphText>

            <ParagraphText>
                When I&apos;m not immersed in coding, I explore the world
                through my camera and delve into the pages of intriguing books
                like{" "}
                <ParagraphLink href="https://www.penguin.co.in/book/the-hidden-hindu/">
                    The Hidden Hindu - Part 1.
                </ParagraphLink>{" "}
                My culinary adventures in the kitchen are another creative
                outlet, where I enjoy experimenting with new recipes and baking
                techniques.
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
